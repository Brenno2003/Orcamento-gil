function validarElementos(oProduto, aQuantidade, oValor){
    return oProduto && aQuantidade && oValor;
}
function validarValor(oValor){
    return oValor > 0;
}
function validarEstoque(estoque){
    return estoque < 100 && estoque > 0;
}
function dataAtual(){
    return new Date().toLocaleString();
}
function numeroAleatorio(){
    return parseInt(Math.random()*100000);
}

function addProduto(produtoAdicionado){
    const ulAddProduto = document.getElementById("listaDeProdutos");
    const liAddProduto = document.createElement("li");
    liAddProduto.textContent = produtoAdicionado;
    ulAddProduto.appendChild(liAddProduto);
}
function validarProdutoSelecionar(produto, quantidade, valor){

    if(validarElementos(produto, quantidade, valor)){
        if(validarValor(valor)){
            if(validarEstoque(quantidade)){
                return `Nome do produto ${produto}, quantidade ${quantidade}, valor R$ ${valor}`;
            }
            else{
                return "Erro na quantidade";
            }
        }
        else{
            return "Erro no valor";
        }
    }
    else{
        return "Erro do produto";
    }

}
function selecionarProduto(){
    let produto = "Arroz";
    let quantidade = parseInt(document.getElementById("qunatidade").value);
    let valor = 10;

    let produtoAdicionado = validarProdutoSelecionar(produto, quantidade, valor);

    addProduto(produtoAdicionado);
    
}
