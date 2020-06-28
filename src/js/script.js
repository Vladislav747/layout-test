//Обработчик меню иконки
let userIcon = document.querySelector('.user-header__icon');

userIcon.addEventListener("mouseover", function(e){
    let userMenu = document.querySelector('.user-header__menu');
    userMenu.classList.toggle('active');
});


//menu burger


let iconMenu = document.querySelector('.icon-menu');

if(iconMenu != null){
    let delay = 500;
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
        console.log("check");
        
            menuBody.classList.toggle("_active");
        
        }
    )
}

