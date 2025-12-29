window.addEventListener("DOMContentLoaded", () => {

    initScroll();
    AOS.init()

    function initScroll() {
        window.addEventListener('scroll', (e) => {
            if (pageYOffset > 70) {
                $('header').addClass('js-scroll')
            } else {
                $('header').removeClass('js-scroll')
            }
        })
    }

    function initMobileBurger() {
        const hamMenu = document.querySelector('.header-ham-menu')
        const hamMenuSpan = document.querySelectorAll('.header-ham-menu span')
        const navMenuMob = document.querySelector('.header-nav-menu-mob')
        const body = document.querySelector('body')
        const tel = document.querySelectorAll('.header-tel')
        const logo = document.querySelector('.header-logo')
        const main = document.querySelector('main')
        const headerBorderMob = document.querySelector('.header-nav-box')
        const headerBox = document.querySelector('.header-box')
        const nameTheme = document.querySelector('.header-logo').dataset.theme
        
        hamMenu.addEventListener('click', function () {
            hamMenu.classList.toggle('active')
            navMenuMob.classList.toggle('active')
            main.classList.toggle('blur')
            body.classList.toggle('overflow')
            // headerBorderMob.classList.toggle('js-border-none')
            tel.forEach(function (item) {
                item.classList.toggle('black')
            })
            if (hamMenu.classList.contains('active')) {
                // logo.setAttribute('src', `../themes/${nameTheme}/assets/img/svg/logo-black.svg`)
                logo.setAttribute('src', `./assets/img/svg/logo-black.svg`)
                headerBox.style.setProperty('background', '#fff')
        
                headerBorderMob.style.setProperty('border-bottom-color', '#000')
            } else {
                // logo.setAttribute('src', `../themes/${nameTheme}/assets/img/svg/logo.svg`)
                logo.setAttribute('src', `./assets/img/svg/logo.svg`)
                headerBox.style.setProperty('background', 'none')
                headerBorderMob.style.setProperty('border-bottom-color', 'rgba(246, 246, 246, 0.6)')
            }
        })
        
        main.addEventListener('click', function () {
            hamMenu.classList.remove('active')
            navMenuMob.classList.remove('active')
            main.classList.remove('blur')
            body.classList.remove('overflow')
            tel.forEach(function (item) {
                item.classList.remove('black')
            })
            // logo.setAttribute('src', `../themes/${nameTheme}/assets/img/svg/logo.svg`)
                logo.setAttribute('src', `./assets/img/svg/logo.svg`)
            headerBox.style.setProperty('background', 'none')
            headerBorderMob.style.setProperty('border-bottom-color', 'rgba(246, 246, 246, 0.6)')
        })
        
        const li = document.querySelectorAll('.js-nav-link')
        
        li.forEach(function (item) {
            item.addEventListener('click', function () {
                hamMenu.classList.toggle('active')
                navMenuMob.classList.toggle('active')
                main.classList.remove('blur')
                body.classList.toggle('overflow')
                // tel.classList.toggle('black')
                tel.forEach(function (item) {
                    item.classList.remove('black')
                })
                // logo.setAttribute('src', `../themes/${nameTheme}/assets/img/svg/logo.svg`)
                logo.setAttribute('src', `./assets/img/svg/logo.svg`)
                headerBox.style.setProperty('background', 'none')
                headerBorderMob.style.setProperty('border-bottom-color', 'rgba(246, 246, 246, 0.6)')
            })
        })
    }
})

