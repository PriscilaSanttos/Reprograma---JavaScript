const button = document.querySelector(".feedback__button")
const inputFeedback = document.getElementById("feedbackInputMessage")

button.addEventListener("click", function (evento) {
    evento.preventDefault();

    const depoimentos = document.querySelector(".testimonials")

    const depoimentosArea = document.createElement("p")
    depoimentos.appendChild(depoimentosArea);

    const depoimentosTexto = document.createTextNode(inputFeedback.value)
    depoimentosArea.appendChild(depoimentosTexto)


});


