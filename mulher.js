const express = require("express")
const router = express.Router()

const app = express ()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Amanda Malaguti",
        minibio: "Artista-pedagoga e pesquisadora em educação"
    })

}
function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)