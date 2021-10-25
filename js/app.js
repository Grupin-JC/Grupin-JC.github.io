const footer_input = document.querySelector(".footer-input")

footer_input.addEventListener('focus', () => {
    footer_input.classList.add('focus')
});

footer_input.addEventListener('blur', () => {
    if (footer_input.value != "") return;
    footer_input.classList.remove('focus')
})

//? Header

const hambuguer_menu = document.querySelector('.hamburguer-menu'),
    navbar = document.querySelector('header nav'),
    links = document.querySelectorAll('.links a');

function closeMenu() {
    navbar.classList.remove('open')
}

hambuguer_menu.addEventListener('click', () => {
    if (!navbar.classList.contains('open')) {
        navbar.classList.add('open');
        document
            .querySelectorAll('.section')
            .forEach(element => {
                element.style.display = 'none'
            })
        document
            .querySelector('.footer')
            .style
            .display = 'none';
    } else {
        closeMenu();
        document
            .querySelectorAll('.section')
            .forEach(element => {
                element.style.display = 'block'
            })
        document
            .querySelector('.footer')
            .style
            .display = 'block';
    }
})