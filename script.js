
    function adjustAsidePosition() {
        const header = document.querySelector('header');
        const aside = document.querySelector('aside');
        
        // Pega a altura atual do header
        const headerHeight = header.offsetHeight;
        
        // Define o top do aside com base na altura do header
        aside.style.top = `${headerHeight}px`;
        
        // Ajusta a altura mínima do aside para ser a altura da tela menos o header
        aside.style.minHeight = `calc(100vh - ${headerHeight}px)`;
    }

    // Chama a função quando a página carrega
    window.addEventListener('load', adjustAsidePosition);

    // Recalcula quando a janela é redimensionada
    window.addEventListener('resize', adjustAsidePosition);

