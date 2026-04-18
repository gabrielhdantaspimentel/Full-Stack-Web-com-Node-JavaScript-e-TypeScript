//PILAR 1 - ABSTRAÇÃO
/*
Modelo, Entidade, Identidade, Características e Ações
*/

//MODELO => CLASSE INTEIRA
class Carro  {
    constructor(){
        this.marca = "Volkswagen", //CARACTERISCA É O QUE VEM DEPOIS DOS "this"
        this.modelo = "Gol",       //CARACTERISCA
        this.cor = "prata",        //CARACTERISCA
        this.placa = "EMJ-2565"    //CARACTERISCA
    }
    //AÇÕES
    ligar(){
    
    }
}

//ENTIDADE => OBJETO Carro
//IDENTIDADE => LINHA ABAIXO INTEIRA => const carro = new Carro()
const carro = new Carro()
carro.modelo = "Golf"
console.log(carro.modelo)

const carro2 = new Carro()
console.log(carro2.modelo)


// Loja Virtual
class Produto {
    constructor(){
        
        // Roupas
        this.tamanho = "P",
        this.cor = "Vermelho",
        this.preco = "45,90",

        // Eletronicos
        this.altura = "50cm",
        this.largura = "30cm"

    }
}