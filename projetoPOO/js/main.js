import  Bolsa  from "./classes/bolsas.js";

const estoque = [];

function apenasLetras(str) {
    return /^[a-zA-Z\s]+$/.test(str);
}

function adicionarBolsas() {
    while (true) {
        const cores = prompt("Digite uma cor:").trim().toLowerCase();
        const tamanhos = prompt("Digite o tamanho:").trim().toLowerCase();
        const material = prompt("Digite o material:").trim().toLowerCase();
        const precos = parseFloat(prompt("Digite o preço:"));
        const quantidade = parseInt(prompt("Digite a quantidade:"));

    if (
        !apenasLetras(cores) ||
        !apenasLetras(tamanhos) ||
        !apenasLetras(material) ||
        isNaN(precos) ||
        isNaN(quantidade)
    ) {
        alert("Dados inválidos. Por favor, insira os valores corretamente.");
    } else {
        alert("bolsa adicionada com sucesso");
        const novaBolsa = new Bolsa(cores, precos, tamanhos, quantidade, material);
        estoque.push(novaBolsa);
        break;
    }
}}

function verificarEstoque() {
    if(estoque.length === 0) {
        alert("Nenhum produto cadastrado");
        return;
    }
    const produtosFormatados = estoque.map((produto, index) => {
    return `${index + 1}. ${produto.exibirBolsa()} - codigo : ${produto.getCodigo()}`;
});

alert(produtosFormatados.join("\n")) 
}

function alterarEstoque() {
    verificarEstoque();

    while (true) {
        const index = parseInt(prompt("Digite o número do produto que deseja alterar:")) - 1;

        if (isNaN(index) || index < 0 || index >= estoque.length) {
            alert("Índice inválido. Por favor, digite um número válido.");
        continue; 
        }

        const campo = prompt("Digite o campo que deseja alterar:");

        if (!(campo in estoque[index])) {
            alert("Campo inválido. Por favor, digite um campo existente.");
        continue; 
        }

        const novoValor = prompt(`Digite o novo valor para o campo "${campo}":`);

        estoque[index][campo] = novoValor;

        alert("Estoque alterado com sucesso!");
        break; 
    }
}

function removerProduto(){
    verificarEstoque()
    const index = parseInt(prompt("Digite o numero do produto para deletar")) - 1
    if (index >= 0 && index < estoque.length) {
        const produtoRemovido = estoque.splice(index, 1);
        alert(`Produto "${produtoRemovido[0].getCodigo()}" deletado com sucesso`)
    } else {
        alert("Produto não encontrado");
    }
}

function menu(){
    while(true){
        const interacao = prompt("1-Adicionar bolsa\n2-Verificar estoque\n3-Alterar estoque\n4-Remover produto do estoque");
        

    if(interacao === null){
        alert("Programa encerrado")
        break
    } 

        switch(interacao.trim()){
            case "1":
                adicionarBolsas();
                break
            case "2":
                verificarEstoque();
                break
            case "3":
                alterarEstoque();
                break
            case "4":
                removerProduto();
                break;
            default:
                alert("Opção inválida")
                break;
        }
    }
}

menu();