const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*')

        response.header('Access-Control-Allow-Methods', 'GET')

        app.use(cors())

        next()
})

//endpoint: retorna todas as categorias
app.get('/categorias', cors(), async function(request, response, next){
    let controleCategorias = require('./module/info.js')
    let categorias = controleCategorias.getCategorias()

    if(categorias){
        response.status(200)
        response.json(categorias)
    }
    else{
        response.status(404)
        response.json('{erro: item não encontrado}')
    }
})

//endpoint: retorna todos os produtos
app.get('/produtos', cors(), async function(request, response, next){
    let controleProdutos = require('./module/info.js')
    let produtos = controleProdutos.getProdutos()

    if(produtos){
        response.status(200)
        response.json(produtos)
    }
    else{
        response.status(404)
        response.json('{erro: item não encontrado}')
    }
})

//endpoint: retorna o produto selecionado
app.get('/produto/', cors(), async function(request, response, next){
    let nomeProduto = request.query.produto

    let controleProduto = require('./module/info.js')
    let produto = controleProduto.getProduto(nomeProduto)

    if(produto){
        response.status(200)
        response.json(produto)
    }
    else{
        response.status(404)
        response.json('{erro: item não encontrado}')
    }

})

//endpoint: retorna dados do cliente selecionado
app.get('/cliente/', cors(), async function(request, response, next){
    let nomeCliente = request.query.nome

    let controleClientes = require('./module/info.js')
    let cliente = controleClientes.getCliente(nomeCliente)

    if(cliente){
        response.status(200)
        response.json(cliente)
    }
    else{
        response.status(404)
        response.json('{erro: item não encontrado}')
    }
})

//endpoint: retorna os comentários
app.get('/comentarios', cors(), async function(request, response, next){
    let controleComentarios = require('./module/info.js')
    let comentarios = controleComentarios.getComentarios()

    if(comentarios){
        response.status(200)
        response.json(comentarios)
    }
    else{
        response.status(404)
        response.json('{erro: item não encontrado}')
    }
})
app.listen('8080', function(){
    console.log('API funcionando!!!!')
})