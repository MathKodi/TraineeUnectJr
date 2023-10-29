//menu
const item = document.querySelectorAll('.item-menu');
    item.forEach(item => {
        item.addEventListener('click', () => {
            fecharMenu();
        });
    });
    function fecharMenu() {
        let menu = document.querySelector('.mobile-menu');
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    }

    function abrirMenu() {
        let menu = document.querySelector('.mobile-menu');
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        } else {
            menu.classList.add('open');
        }
    }