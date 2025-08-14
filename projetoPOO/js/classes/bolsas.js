import Caracteristicas from "./caracteristicas.js";

class Bolsa extends Caracteristicas {
    constructor(cor, preco, tamanho, quantidade, material) {
        super(cor, preco, tamanho);
        this.quantidade = quantidade;
        this.material = material;
        this._codigo = this.gerarCodigo();
    }

    gerarCodigo(){
        return Math.round(Math.random() * 10000);
    }
    getCodigo() {
        return this._codigo;
    }
    // getQuantidade(){
    //     return this._quantidade
    // }
    // setQuantidade(novaQuantidade){
    //     this._quantidade = novaQuantidade; 
    // }

    exibirBolsa() {
        return this.exibirInfo() + `- quantidade : ${this.quantidade}` ;
    }
}


export default Bolsa;