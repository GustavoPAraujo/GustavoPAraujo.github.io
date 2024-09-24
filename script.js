function adjustAsidePosition() {
    const header = document.querySelector('header');
    const aside = document.querySelector('aside');

    const headerHeight = header.offsetHeight;

    aside.style.top = `${headerHeight}px`;

    if (window.innerWidth > 500) {
        aside.style.minHeight = `calc(100vh - ${headerHeight}px)`;
    } else {
        aside.style.minHeight = null;
        aside.style.top = null;
        aside.style.height = 'auto';
        aside.style.fontSize = '0.6rem';
    }
}

window.addEventListener('load', adjustAsidePosition);
window.addEventListener('resize', adjustAsidePosition);
