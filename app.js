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

//endpoint: retorna as categorias
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

app.listen('8080', function(){
    console.log('API funcionando!!!!')
})