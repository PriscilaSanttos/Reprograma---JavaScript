const contatoNome = document.getElementById("contatoInputNome");
const contatoEmail = document.getElementById("contatoInputEmail");
const contatoPhone = document.getElementById("contatoInputPhone");
const contatoMessage = document.getElementById("conatoInputMessage");
const contatoButton = document.querySelector(".contato__button");

contatoButton.addEventListener("click", function (evento){
    evento.preventDefault();

    if(contatoNome.value === undefined || contatoNome.value === null || contatoNome.value === "" || contatoNome.value === " ") {

        contatoNome.focus ();
        return false;
    }
        else if (contatoEmail.value === undefined || contatoEmail.value === null || contatoEmail.value === "" || contatoEmail.value === " " ){

            contatoEmail.focus ();
            return false;
        }

        else if (contatoPhone.value === undefined || contatoPhone === null || contatoPhone === "" || contatoPhone.value === " " ){

            contatoPhone.focus();
            return false;
        }

        else if (contatoMessage.value === undefined || contatoMessage === null || contatoMessage === "" || contatoMessage === " "){

            contatoMessage.focus();
            return false;
        }
            return true 
        }
)