// Seleciona o ícone de menu e o menu de navegação
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Alterna a visibilidade do menu quando o ícone de hambúrguer é clicado
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
