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

//endpoint: retorna imagem das categorias
app.get('/categorias/img', cors(), async function(request, response, next){

    let controleCategorias = require('./module/info.js')
    let imgCategorias = controleCategorias.getCategorias
    
    if(imgCategorias){
        response.status(200)
        response.json(imgCategorias)
    }
    else{
        response.status(404)
        response.json('{erro: item não encontrado}')
    }
})

app.listen('8080', function(){
    console.log('API funcionando!!!!')
})