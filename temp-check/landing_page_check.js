
        // Menu Mobile Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fechar menu mobile ao clicar em um link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Efeito de sombra no navbar ao dar scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-md');
                navbar.classList.remove('py-2'); // Pode ajustar caso queira nav maior/menor
            } else {
                navbar.classList.remove('shadow-md');
            }
        });
    