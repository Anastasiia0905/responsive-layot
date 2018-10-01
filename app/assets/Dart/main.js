/* ---------STICKY NAV -----------*/
window.onscroll = function(){stickyHeader()};

function stickyHeader(){
    let header = document.querySelector(".header");
    let stycky = header.offsetTop;
    if(window.pageYOffset > stycky){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

/*----------------BURGER-------------*/
let humburger = {
    navToggle: document.querySelector('.nav-toggle'),
	navMenu: document.querySelector('.nav-menu'),
	body: document.querySelector('body'),
    onToggle: function(e){
        e.preventDefault();
        this.navToggle.classList.toggle('expanted');
		this.navMenu.classList.toggle('expanted');
		this.body.classList.toggle('expanted');
    }
};
humburger.navToggle.addEventListener('click', function(e){
    humburger.onToggle(e);
});

/*-----------------VIDEO------------------*/
let videoplayer = {
    videoContainer: document.querySelector('.video-container'),
    video: document.querySelector('.video'),
    cntrBar: document.querySelector('.controls'),
    bar: document.querySelector(".bar"),
    cntrButton: document.querySelector("#play-stop"),

    showControl: function(){
        this.cntrBar.classList.add('show');
    },
    hideControl: function(){
        this.cntrBar.classList.remove('show');
    }
};
videoplayer.videoContainer.addEventListener('mouseenter', function(e){
    videoplayer.showControl(e);
});
videoplayer.videoContainer.addEventListener('mouseleave', function(e){
        videoplayer.hideControl(e);
});
videoplayer.cntrButton.addEventListener("click", function(){
    if(videoplayer.video.paused){
        videoplayer.video.play();
        videoplayer.cntrButton.classList.remove('play');
        videoplayer.cntrButton.classList.add('stop');
    } else {
        videoplayer.video.pause();
        videoplayer.cntrButton.classList.remove('stop');
        videoplayer.cntrButton.classList.add('play');
    }
});
videoplayer.video.addEventListener("timeupdate", function(){
    let barPos = videoplayer.video.currentTime / videoplayer.video.duration;
    videoplayer.bar.style.width = barPos *100 +('%');
    if(videoplayer.video.ended){
        videoplayer.cntrButton.classList.remove('stop');
        videoplayer.cntrButton.classList.add('play');
    }
});
