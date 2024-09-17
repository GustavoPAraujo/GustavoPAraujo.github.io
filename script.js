function adjustAsidePosition() {
    const header = document.querySelector('header');
    const aside = document.querySelector('aside');

    // Pega a altura atual do header
    const headerHeight = header.offsetHeight;

    // Aplica o top para o aside em qualquer tamanho de tela
    aside.style.top = `${headerHeight}px`;

    // Verifica se a largura da tela é maior que 500px
    if (window.innerWidth > 500) {
        // Para telas maiores, ajusta também a altura do aside
        aside.style.minHeight = `calc(100vh - ${headerHeight}px)`;
    } else {
        // Para telas menores, deixa o aside ajustar automaticamente a altura
        aside.style.minHeight = null; // Remove o ajuste de minHeight
        aside.style.height = 'auto'; // Garante que o aside ajuste sua altura automaticamente
    }
}

// Chama a função quando a página carrega
window.addEventListener('load', adjustAsidePosition);

// Recalcula quando a janela é redimensionada
window.addEventListener('resize', adjustAsidePosition);
