const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('mouseenter', () => {
    navMenu.classList.toggle('active');
});

navMenu.addEventListener('mouseleave', () => {
        navMenu.classList.remove('active');
});