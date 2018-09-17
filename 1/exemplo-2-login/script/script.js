const input = document.getElementById ("loginInputEmail");
const login = document.getElementById("loginInputPassword");
const botao = document.querySelector(".login__button");

botao.addEventListener( "click", function (evento) {
    evento.preventDefault();
    // const email = input.value;

    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode ("Login realizado com sucesso!");
    resposta.appendChild(respostaMensagem);
    
    const loginForm = document.querySelector(".login__form");
    loginForm.insertBefore (resposta, loginForm.childNodes[0]);    
    


    // const loginForm = document.querySelector(".login__form")
    // loginForm.innerHTML = `Login efetuado com sucesso com o email ${email}!`

    // alert(`O login com o ${email} foi realizado com sucesso!`)
});
