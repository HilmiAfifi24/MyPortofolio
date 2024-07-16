// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function() {
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;

    if(window.pageYOffset > fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}