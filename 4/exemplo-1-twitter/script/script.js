
const tweetButton = document.querySelector(".tweet-composer__button")
const tweetInput = document.getElementById("tweetComposerInput")

tweetButton.addEventListener("click", function(evento){
    evento.preventDefault();

    if (tweetInput.value === undefined || tweetInput.value === null || tweetInput.value === "" || tweetInput.value === " "){
        return false 
    }

    const divMaetweet = document.querySelector(".tweets-timeline__box")

    const localTweetDiv = document.createElement("div")
    const tweetP = document.createElement("p")

    const tweetMensagem = document.createTextNode(tweetComposerInput.value)
    tweetP.appendChild(tweetMensagem)

    divMaetweet.appendChild(localTweetDiv)
    localTweetDiv.appendChild(tweetP)

    divMaetweet.insertBefore(localTweetDiv,divMaetweet.childNodes [0])

    const header = document.createElement("div");

    localTweetDiv.appendChild(header)
    localTweetDiv.appendChild(tweetP)

    const footer = document.createElement("div");
    footer.innerHTML = `<button class="tweets-timeline__delete-button button">Excluir</button>`
    footer.className = "tweets-timeline__footer"

    localTweetDiv.appendChild(footer)

    const name = document.createElement("span")
    name.className = "tweets-timeline__name"
    name.innerHTML = "Priscila Santtos"

    const username =  document.createElement("span")
    username.className = "tweets-timeline__username"
    username.innerHTML = "  @PriscilaSanttos"
    
    const date = new Date();
    const month = date.toLocaleString("pt-br", { month: "short" });
    const day = date.getDate();
    const year = date.getUTCFullYear();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    const data = document.createElement("span")
    data.className = "tweets-timeline__date"
    data.innerHTML = ` ${day} de ${month} de ${year} às ${hour}:${minutes}`

    header.appendChild(name)
    header.appendChild(username)
    header.appendChild(data)


    tweetInput.value = "";

    const botaoExcluir = document.querySelector(".tweets-timeline__delete-button");

    botaoExcluir.addEventListener("click", function(evento){
        evento.preventDefault();
        localTweetDiv.remove ();

    })
})

tweetInput.addEventListener("keydown", function(){
    const textBox = this;
    const maxLength = 280;
    const contador = document.getElementById("tweetComposerCounter");
    const caracteresDisponiveis = maxLength - textBox.value.length

    contador.innerHTML = caracteresDisponiveis;


    if (caracteresDisponiveis <= 15){
        contador.style.color = "red";
    }

    // if (textBox.value.length > maxLength){
    //     textBox.value = textBox.value.substring(0, maxLength)
    // } 

    if (caracteresDisponiveis <= 0 ){
        tweetButton.disabled = true;

    } else {
        contador.style.color = "white";
        tweetButton.disabled = false;
    }

})