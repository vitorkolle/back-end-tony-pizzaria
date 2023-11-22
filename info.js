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
            cidade: 'Itapevi-SP'
        },
        {
            id: '2',
            nome: 'Maria',
            email: 'maria@gmail.com',
            senha: 'maria1234',
            telefone: '1894445555',
            endereco: 'rua abcd, bairro g, osasco',
            cidade: 'Osasco-SP'
        },
        {
            id: '3',
            nome: 'Vitor',
            email: 'vitor@gmail.com',
            senha: 'vitor1234',
            telefone: '2197778888',
            endereco: 'rua abcd, bairro q, cotia',
            cidade: 'Cotia-SP'
        },
        {
            id: '4',
            nome: 'Paula',
            email: 'paula@gmail.com',
            senha: 'paula123',
            telefone: '112226666',
            endereco: 'rua abcd, bairro t, barueri',
            cidade: 'Barueri-SP'
        },
        {
            id: '5',
            nome: 'Felipe',
            email: 'felipe@gmail.com',
            senha: 'felipe1234',
            telefone: '8290001111',
            endereco: 'rua abcd, bairro e, são roque',
            cidade: 'São Roque-SP'
        }
    ]
}
var categorias = [
    {id: '1', nome_categoria: 'Pizza', img_categoria: './img/icone-pizza'},
    {id: '2', nome_categoria: 'Bebida', img_categoria: './img/icone-bebidas'},
    {id: '3', nome_categoria: 'Fruta', img_categoria: './img/icone-fruta'},
    {id: '4', nome_categoria: 'Sorvete', img_categoria: './img/icone-sorvete'}    
]

var produtos = {
    dados:
    [
        {
            id: '1',
            titulo: 'Pizza de calabreza com queijo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 16,00',
            imagem: './img/calabreza-com-queijo.svg',
            categoria: categorias[0]
        },
        {
            id: '2',
            titulo: 'Pizza de peperoni com queijo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 19,00',
            imagem: './img/pepperoni-com-queijo.svg',
            categoria: categorias[0]
        },
        {
            id: '3',
            titulo: 'Pizza marguerita',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 18,00',
            imagem: './img/marguerita.svg',
            categoria: categorias[0]
        },
        {
            id: '4',
            titulo: 'Pizza de peperoni com queijo e tomate',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 19,00',
            imagem: './img/pepperoni-com-queijo-e-tomate.svg',
            categoria: categorias[0]
        },
        {
            id: '5',
            titulo: 'Pizza brotinho com queijo e tomate',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            preco: 'R$ 12,00',
            imagem: './img/brotinho-com-queijo-e-tomate.svg',
            categoria: categorias[0]
        },
        {
            id: '6',
            titulo: 'Coca-cola 2L',
            descricao: 'Refrigerante Garrafa 2l Embalagem Econômica',
            preco: 'R$ 14,99',
            categoria: categorias[1] 
        },
        {
            id: '7',
            titulo: 'Cerveja Heineken',
            descricao: 'Fardo com 6 garrafas de 600ml Embalagem Econômica',
            preco: 'R$ 44,90',
            categoria: categorias[1]
        }

    ]
}