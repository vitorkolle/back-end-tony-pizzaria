var clientes = {
    dados:
    [
        {
            id: '1',
            nome: 'André',
            email: 'andre@gmail.com',
            senha: 'andre1234',
            telefone: '8511112222', 
            endereco: 'rua abcd, bairro c, itapevi',
            cidade: 'Itapevi-SP',
            img: './img/andre.png'
        },
        {
            id: '2',
            nome: 'Maria',
            email: 'maria@gmail.com',
            senha: 'maria1234',
            telefone: '1894445555',
            endereco: 'rua abcd, bairro g, osasco',
            cidade: 'Osasco-SP',
            img: './img/maria.png'
        },
        {
            id: '3',
            nome: 'Vitor',
            email: 'vitor@gmail.com',
            senha: 'vitor1234',
            telefone: '2197778888',
            endereco: 'rua abcd, bairro q, cotia',
            cidade: 'Cotia-SP',
            img: './img/vitor.png'
        },
        {
            id: '4',
            nome: 'Paula',
            email: 'paula@gmail.com',
            senha: 'paula123',
            telefone: '112226666',
            endereco: 'rua abcd, bairro t, barueri',
            cidade: 'Barueri-SP',
            img: './img/paula.png'
        },
        {
            id: '5',
            nome: 'Felipe',
            email: 'felipe@gmail.com',
            senha: 'felipe1234',
            telefone: '8290001111',
            endereco: 'rua abcd, bairro e, são roque',
            cidade: 'São Roque-SP',
            img: './img/felipe.png'
        }
    ]
}

var categorias = [
    {id: '1', nome_categoria: 'Pizza', img_categoria: './img/icone-pizza'},
    {id: '2', nome_categoria: 'Bebida', img_categoria: './img/icone-bebidas'},
    {id: '3', nome_categoria: 'Fruta', img_categoria: './img/icone-fruta'},
    {id: '4', nome_categoria: 'Sorvete', img_categoria: './img/icone-sorvete'}    
]

var comentarios = {
    dados:
    [
        {
            id: '1',
            img_cliente: './img/maria-da-silva.png',
            nome_cliente: 'Maria da Silva',
            data_comentario: '15/03/2022',
            titulo_comentario: 'Pizza muito boa!',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 4
        },
        {
            id: '2',
            img_cliente: './img/pedro-gomes-dias.png',
            nome_cliente: 'Pedro Gomes Dias',
            data_comentario: '21/05/2022',
            titulo_comentario: 'Essa pizza é demais, recomendo.',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 5 
        }

    ]
}

var produtos = {
    dados:
    [
        {
            id: '1',
            titulo: 'Pizza de Calabreza Com Queijo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 16,00',
            imagem: './img/calabreza-com-queijo.svg',
            categoria: categorias[0],
            qtd_estrela: 5
            
        },
        {
            id: '2',
            titulo: 'Pizza de Peperoni Com Queijo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 19,00',
            imagem: './img/pepperoni-com-queijo.svg',
            categoria: categorias[0],
            qtd_estrela: 4
        },
        {
            id: '3',
            titulo: 'Pizza marguerita',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 18,00',
            imagem: './img/marguerita.svg',
            categoria: categorias[0],
            qtd_estrela: 5
        },
        {
            id: '4',
            titulo: 'Pizza De Peperoni Com Queijo E Tomate',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 19,00',
            imagem: './img/pepperoni-com-queijo-e-tomate.svg',
            categoria: categorias[0],
            qtd_estrela: 5
        },
        {
            id: '5',
            titulo: 'Pizza Brotinho Com Queijo e Tomate',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 12,00',
            imagem: './img/brotinho-com-queijo-e-tomate.svg',
            categoria: categorias[0],
            qtd_estrela: 4
        },
        {
            id: '6',
            titulo: 'Coca-Cola 2l',
            descricao: 'Refrigerante Garrafa 2l Embalagem Econômica',
            preco: 'R$ 14,99',
            categoria: categorias[1],
            qtd_estrela: 5
        },
        {
            id: '7',
            titulo: 'Cerveja Heineken',
            descricao: 'Fardo com 6 garrafas de 600ml Embalagem Econômica',
            preco: 'R$ 44,90',
            categoria: categorias[1],
            qtd_estrela: 4
        }

    ]
}

const getCategorias = function(){
    const categoriaLocal = []
    const jsonCategorias = {}
    let status = false

    categorias.forEach(categorias => {
        categoriaLocal.push(categorias.img_categoria)  
        status = true      
    });

    jsonCategorias.img = categoriaLocal

    if(status == true){
        return jsonCategorias
    }
    else{
        return false
    }
    

}

const getProdutos = function(){
    const produtosLocal = []
    const jsonProdutos = {}
    let status = false
    
    produtos.dados.forEach(produtos => {
        produtosLocal.push(produtos)
        status = true        
    });

    jsonProdutos.dados = produtosLocal

    
    if(status == true){
        return jsonProdutos
    }
    else{
        return false
    }
}

const getProduto = function(produtoSelecionado){
    const produtoLocal = produtoSelecionado
    const jsonProduto = {}
    let status = false

    produtos.dados.forEach(produtos => {
        if(produtoLocal.toLowerCase() == produtos.titulo.toLowerCase()){
            jsonProduto.titulo = produtos.titulo
            jsonProduto.descricao = produtos.descricao
            jsonProduto.img = produtos.imagem
            jsonProduto.categoria = produtos.categoria
            jsonProduto.preco = produtos.preco
            jsonProduto.qtd_estrela = produtos.qtd_estrela
            jsonProduto.comentarios = comentarios.dados
            status = true
        }        
    });

    if(status == true){
        console.log(jsonProduto)
        return jsonProduto
    }
    else{
        return false
    }

}

const getCliente = function(nomeCliente){
    const jsonCliente = {}
    let status = false

    clientes.dados.forEach(clientes => {
        if(nomeCliente.toLowerCase() == clientes.nome.toLowerCase()){
            jsonCliente.nome = clientes.nome
            jsonCliente.email = clientes.email
            jsonCliente.telefone = clientes.telefone
            jsonCliente.endereco = clientes.endereco
            jsonCliente.cidade = clientes.cidade
            jsonCliente.img = clientes.img
            status = true
        }                
    });

    if(status == true){
        return jsonCliente
    }
    else{
        return false
    }

    
}
