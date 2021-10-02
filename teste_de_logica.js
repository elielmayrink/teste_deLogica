let moto1 = {
    nome: "josé",
    taxa: 2,
    exclusividade: false
};
let moto2 = {
    nome: "jessica",
    taxa: 2,
    exclusividade: false
};
let moto3 = {
    nome: "moacir",
    taxa: 2,
    exclusividade: false
};
let moto4 = {
    nome: "jadson",
    taxa: 2,
    exclusividade: true
};
let moto5 = {
    nome: "josiane",
    taxa: 3,
    exclusividade: false
};

function corridas(motoboy) {
    let taxa = !motoboy ? 3 : motoboy.taxa
    let nomeDoMotoboy = !motoboy ? "motora" : motoboy.nome
    let lojas =  [
        { nome: "loja1", pedidos: {qtd: 3, valores:[50, 50, 50], porcentagemDeComissao: 5} },
        { nome: "loja2",pedidos: {qtd: 4, valores:[50, 50, 50, 50], porcentagemDeComissao: 5} },
        { nome: "loja3",pedidos: {qtd: 3, valores:[50, 50, 100], porcentagemDeComissao: 15} }
];

    let pedidosSaindo = motoboy && motoboy.exclusividade ? lojas.filter(loja => loja.nome === "loja1") : lojas;
    let retiradoDe = pedidosSaindo.map(loja => loja.nome);
    let valoresTotais = pedidosSaindo.map(loja => loja.pedidos.valores.reduce((valor, acc) => valor + acc));
    let qtdPedidos = pedidosSaindo.map(loja => loja.pedidos).map(qtd => qtd.qtd).reduce((acc, qtd) => acc + qtd); 

    let valorRecebidoPeloMotoboy = pedidosSaindo
                                    .map(loja => loja.pedidos.valores
                                    .reduce((valor, acc) => valor + acc) * (loja.pedidos.porcentagemDeComissao / 100))
                                    .reduce((valor, acc) => valor + acc) + taxa

    console.log(valoresTotais, valorRecebidoPeloMotoboy)

    return console.log(
        `O motoboy se chama 
        ${nomeDoMotoboy}, e ele carrega consigo ${qtdPedidos} pedidos,
        pedidos esses da(s) loja(s) ${retiradoDe},
        o valor total dos pedidos são ${valoresTotais},
        e esse trabalhador recebera R$${valorRecebidoPeloMotoboy}`)
}

corridas();