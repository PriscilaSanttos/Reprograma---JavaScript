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

    const data = document.createElement("span")
    data.className = "tweets-timeline__date"
    data.innerHTML = " 20 de set"

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