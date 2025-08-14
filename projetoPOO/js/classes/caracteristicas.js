class Caracteristicas {
    constructor(cor,preco,tamanho){
        this.cor = cor;
        this.preco = preco;
        this.tamanho = tamanho;
    }

    exibirInfo(){
        return `cor : ${this.cor} - preço : ${this.preco} - tamanho : ${this.tamanho} `;
    }
}

export default Caracteristicas;