const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) {
        console.log("oi" + nome)
        console.log("bem-vindo so robotron 2000")
}

dizOi("Pedro")