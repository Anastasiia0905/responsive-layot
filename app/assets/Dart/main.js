window.onscroll = function(){stickyHeader()};
function stickyHeader(){
    let header = document.querySelector(".header");
    let stycky = header.offsetTop;
    if(window.pageYOffset > stycky){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}