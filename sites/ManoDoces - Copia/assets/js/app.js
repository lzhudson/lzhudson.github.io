function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function Toggle(list) {

    var status_li = $(".menu-b-" + list).hasClass("fa-plus");
    if (status_li) {
        $(".menu-b-" + list).removeClass("fa-plus");
        $(".menu-b-" + list).addClass("fa-angle-down");
        $(".menu-li-" + list).show('fade');
    } else {
        $(".menu-b-" + list).removeClass("fa-angle-down");
        $(".menu-b-" + list).addClass("fa-plus");
        $(".menu-li-" + list).hide('fade');
    }




}
$(document).ready(function() {
    //const menu
    const menuIcon = document.querySelector('.menu-toogle');
    const sideNav = document.querySelector('.side-nav');
    const btnCloseNav = document.querySelector('.close-nav');
    const overlay = document.querySelector('.overlay');
    //consts shop cart
    const carNav = document.querySelector('.cart-container');
    const aClose = document.querySelector('.aClose');
    const xClose = document.querySelector('.xClose');
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

    function showSideNav() {
        sideNav.classList.toggle('active');
        document.body.style.overflow = 'hidden';
        showOverlay();
    }

    function closeSideNav(e) {
        sideNav.classList.toggle('active');
        document.body.style.overflow = '';
        hideOverlay();
    }

    function OpenCart() {
        $(".car-nav").show();
        animateCSS('.car-nav', 'slideInUp');
        $(".car-main").show();
        animateCSS('.car-main', 'slideInUp');

    }

    function CloseCart() {
        animateCSS('.car-nav', 'slideOutDown', function() {
            $(".car-nav").hide();
            $(".car-main").hide();
        })
    }

    function ToggleLi() {
        console.log('oi');
    }

    menuIcon.addEventListener('click', showSideNav);
    btnCloseNav.addEventListener('click', closeSideNav);
    carNav.addEventListener('click', OpenCart);
    aClose.addEventListener('click', CloseCart);
    xClose.addEventListener('click', CloseCart);


});

function activeCarousel() {
    let widthDevice = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (widthDevice >= 768) {
        activeCarouselsProdutos();
    }
}

function activeCarouselsProdutos() {
    $('.favoritos-produtos').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                variableWidth: true
            }
        }]
    })
    $('.descontinho-especial-produtos').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                variableWidth: true
            }
        }]
    })
}