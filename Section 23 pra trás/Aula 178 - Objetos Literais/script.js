// Objeto Literais


let nome = "Notbeook"
let preco = 1200

const produto = {
    nome: nome,
    preco: preco,
    exibirProduto :  function(){
        console.log(`${this.nome} ${this.preco} ${this.categoria}`)
    }
}



const pro = produto 
pro.preco = 2000

console.log(pro.preco)




// produto.categoria = "Eletrônicos" //criando atributo de forma dinâmica
// produto.exibirPreco = function(){
//     console.log(`Preço: ${this.preco}`)
// }

