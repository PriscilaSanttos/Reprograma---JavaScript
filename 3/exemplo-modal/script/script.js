const loginButton = document.querySelector(".login__button");
const buttonClose = document.querySelector(".login-modal__button-close");
const modal = document.querySelector(".login-modal");

buttonClose.addEventListener("click", function (evento) {
    evento.preventDefault();

    modal.style.display = "none";

})

loginButton.addEventListener("click", function (evento){
    evento.preventDefault();

    modal.style.display = "flex";

})
