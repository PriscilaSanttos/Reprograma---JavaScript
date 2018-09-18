const cadastroNome = document.getElementById ("cadastroInputNome")
const cadastroEmail = document.getElementById ("cadastroInputEmail")
const emailConfirmacao = document.getElementById ("cadastroInputEmailConfirm")
const cadastroPassword = document.getElementById("cadastroInputPassword")
const passwordConfirm = document.getElementById("cadastroInputPasswordConfirm")
const cadastroPhone = document.getElementById("cadastroInputPhone")
const cadastroArea = document.getElementById("cadastroInputArea")
const inputLevel = document.getElementById("level")
const cadastroNews = document.getElementById("cadastroInputNews")


const button = document.querySelector(".cadastro__button")

button.addEventListener("click", function (evento) {
evento.preventDefault();

const optionSelect = cadastroArea.options[cadastroArea.selectedIndex]

let radioItem
for (let i = 0; i < inputLevel.length; i++){
    if(inputLevel[i].checked){
        console.log(inputLevel[i])
        radioItem = inputLevel[i]
    }
}

if (cadastroNome.value === undefined || cadastroNome.value === null || cadastroNome.value === "" || cadastroNome.value === " ") {

    cadastroNome.focus ();
    return false;
}

else if(cadastroEmail.value === undefined || cadastroEmail.value === null || cadastroEmail.value === "" || cadastroEmail.value === " "){

    cadastroEmail.focus();
    return false;
}

else if (emailConfirmacao.value === undefined || emailConfirmacao.value === null || emailConfirmacao.value === "" || emailConfirmacao.value === " "){

    emailConfirmacao.focus ();
    return false;
}

else if (cadastroPassword.value === undefined || cadastroPassword.value === null || cadastroPassword.value === "" || cadastroPassword.value === " ") {

    cadastroPassword.focus();
    return false;
}

else if (passwordConfirm.value === undefined || passwordConfirm.value === null || passwordConfirm.value === "" || passwordConfirm.value === " "){

    passwordConfirm.focus();
    return false;
}

else if (cadastroPhone.value === undefined || cadastroPhone.value === null || cadastroPhone.value === "" || cadastroPhone.value === " "){

    cadastroPhone.focus();
    return false;
}

else if (cadastroArea.value === "0" || cadastroArea.value === null || cadastroArea.value === "" ||cadastroArea.value === " "){

    cadastroArea.focus();
    return false;
}

else if (cadastroEmail.value !== emailConfirmacao.value){
    
    cadastroEmail.focus();
    alert ("Erro no email, digite novamente")
    return false
}

else if (cadastroPassword.value !== passwordConfirm.value ||cadastroPassword.value.length <= 7){

     cadastroPassword.focus();
     alert ("Erro na senha, digite novamente")
     return false 
}

else if (cadastroNews.value !== true){
 alert ("É uma pena que você não queira receber as nossas notícias")
}

else if (optionSelect.value == "Front-End"){
    document.querySelector("body").style.backgroundColor = "blue"
}

else if (optionSelect.value == "Back-End"){
    document.querySelector("body").style.backgroundColor = "green"
}


alert ("Em busca de emprego, mas só depois da {reprograma} =D HAHAHAHA")

})
