const hamburgerMenu = document.querySelector('.hamburger-menu')
const navList = document.querySelector('.main-header__nav-list')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    navList.classList.toggle('active')
})