(function () {
    const questions = document.querySelectorAll('.question__list-cont'),
        listItem = document.querySelectorAll('.question__list-item'),
        email = document.querySelector('#email'),
        form = document.querySelector('#form'),
        sliderItem = document.querySelectorAll('.features__slider-item'),
        navSlider = document.querySelectorAll('.features__slider-nav-item'),
        emailContainer = document.querySelector('.email-container'),
        toggle = document.querySelector(".c-hamburger"),
        menuContainer = document.querySelector('body');

    questions.forEach(function (item, index) {
        item.addEventListener('click', function () {
            if (listItem[index].classList.contains('active')) {
                listItem[index].classList.remove('active');
            } else {
                listItem[index].classList.add('active');
            }
        })
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let emailChecked = email.value.match(/^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/);
        if (!emailChecked) {
            emailContainer.classList.add('error');
        } else {
            emailContainer.classList.remove('error');
        }
    })

    navSlider.forEach(function (item, index) {
        item.addEventListener('click', function () {
            sliderItem.forEach(function (el) {
                el.classList.remove('active');
            })
            sliderItem[index].classList.add('active');

            navSlider.forEach(function (el) {
                el.classList.remove('active');
            })
            item.classList.add('active');
        })
    });

    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        menuContainer.classList.toggle('menu-active');
    });
})();