//Обработчик меню иконки
let user_icon = document.querySelector('.user-header__icon');

user_icon.addEventListener("click", function(e){
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('active');
});
