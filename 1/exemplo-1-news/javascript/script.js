// const titulo = document.getElementById ("formTitle");

// const titulo2 = document.querySelector(".news__title")


// alert(titulo)
// console.log (titulo)
// console.log(titulo2)

const input= document.getElementById ("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener( "click" , function (evento) {
    evento.preventDefault();

//    const email = input.value
//     // alert(`O email ${email} foi cadastrado com sucesso!`)

//     // const email2 = document.getElementById ("newsInputEmail").value;


//     const form = document.querySelector(".news__form")
//     form.innerHTML = `O ${email} foi cadastrado com sucesso !`

const resposta = document.createElement("span");
const respostaMensagem = document.createTextNode ("Email cadastrado com sucesso!");
resposta.appendChild(respostaMensagem);

const newsForm = document.querySelector(".news__form");
newsForm.insertBefore (resposta, newsForm.childNodes[0]);

});
