$(document).ready(function(){
    const menuIcon = document.querySelector('.menu-toogle');
    const sideNav = document.querySelector('.side-nav');
    const btnCloseNav = document.querySelector('.close-nav');
    const overlay = document.querySelector('.overlay');
    activeCarousel();
    
    $('.slides-content').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
    });
    function showOverlay() {
        overlay.style.display = 'block';
    }
    function hideOverlay() {
        overlay.style.display = 'none';
    }
    function showSideNav(){
        sideNav.classList.toggle('active');
        document.body.style.overflow = 'hidden';
        showOverlay();
    }
    function closeSideNav(e) {
        sideNav.classList.toggle('active');
        document.body.style.overflow = '';
        hideOverlay();
    }
    menuIcon.addEventListener('click', showSideNav);
    btnCloseNav.addEventListener('click', closeSideNav);
});
function activeCarousel(){
    let widthDevice = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(widthDevice >= 768 ){
        activeCarouselsProdutos();
    }       
}
function activeCarouselsProdutos(){
    $('.favoritos-produtos').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                variableWidth: true
              }
            }
        ]
    })
    $('.descontinho-especial-produtos').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                variableWidth: true
              }
            }
        ]
    })
}