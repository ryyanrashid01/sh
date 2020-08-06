var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

let hamburger = document.querySelector('.hamburger')
let times = document.querySelector('.times')
let mobileNav = document.querySelector('.mobile-nav')
let contactButton = document.querySelector('#contact-button')

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open');
});

times.addEventListener('click', function() {
    mobileNav.classList.remove('open');
});

contactButton.addEventListener('click', function() {
    mobileNav.classList.remove('open');
});