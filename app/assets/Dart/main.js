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
    mainMenu: document.querySelector('.main-menu'),
	body: document.querySelector('body'),
    onToggle: function(e){
        this.navToggle.classList.toggle('expanted');
		this.navMenu.classList.toggle('expanted');
        this.body.classList.toggle('expanted');
    }
};
humburger.navToggle.addEventListener('click', function(e){
    e.preventDefault();
    humburger.onToggle(e);
});
humburger.mainMenu.addEventListener('click', (e)=>{
    humburger.onToggle(e);
})
/*-----------------MENU------------------*/


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

/*-----------------ACCORDION-------------*/
let cardContainer = document.querySelector(".cards-section");
let cardTop = document.querySelectorAll('.card__top');
let cardDown = document.querySelectorAll('.card__down');

cardContainer.addEventListener('click', function(e){
    let target = e.target;
    for(let i = 0; i < cardTop.length; i++){
        if(target != cardTop[i]){
            cardDown[i].classList.remove('show');
        }
        if(target == cardTop[i]){
            cardDown[i].classList.toggle('show');
        }
    }
   
});


/*---------------CAROUSEL-------------------*/
let feedBackBlock = document.querySelectorAll('.feedBack__block');
let arrowUp = document.querySelector('.arrowUp');
let arrowDown = document.querySelector('.arrowDown');
let currentFeedBackBlock = 0;

let reset = () => {
    for(let i = 0; i < feedBackBlock.length; i++){
        feedBackBlock[i].style.display = 'none';
    }
}
let showFeedBack = () => {
    reset();
    feedBackBlock[currentFeedBackBlock].style.display = 'block';
    
}
let slideUp = () => {
    reset();
    feedBackBlock[currentFeedBackBlock-1].style.display = "block";
    currentFeedBackBlock --;
}
let slideDown = () => {
    reset();
    feedBackBlock[currentFeedBackBlock+1].style.display = 'block';
    currentFeedBackBlock ++;
}
arrowUp.addEventListener('click', () => {
    if(currentFeedBackBlock === 0){
        currentFeedBackBlock = feedBackBlock.length;
    }
    slideUp();
});
arrowDown.addEventListener('click', () => {
    if(currentFeedBackBlock == feedBackBlock -1){
        currentFeedBackBlock -1;
    };
    if(currentFeedBackBlock+1 == feedBackBlock.length){
        currentFeedBackBlock = -1;
    }
    slideDown();
});
showFeedBack();
