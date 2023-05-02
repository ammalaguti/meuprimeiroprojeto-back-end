const express = require("express")
const router = express.Router()

const app = express ()
const porta = 3333

 const mulheres = [
    {
        nome: 'Amanda Malaguti',
        minibio:" Artista-pedagoga e Pesquisadora"
    },
    {
        nome: "Iana Chan",
        imagem: " ",
        minibio: "Fundadora do Programaria"
    },
    { 
        nome: "Nina da Hora",
        imagem: " ",
        minibio: "Hacker antirracista"
    }
 ]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)