/*
let nome = {
    texto: "ja",
    length: 2,
    charAt(){} // método sempre tem (parenteses abrindo e fechando igual esses dois que estão cobrindo essa frase), 
               // quando não tem é atributo, tipo o nome.length
}
*/

// "jamilton".length

// let nome = "carro do jamilton"
// nome.length
// nome.charAt(0)
// let n = nome.replace("jamilton", "pedro")

/*
let frase = "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo"
let n = frase.substr(0,30) + "..."
//primeira posição do .substr é de qual posição caractere vai comerçar e segunda é até onde vai
//concatenei com os "..." pra dar exemplo prático de como é usado, tipo em rede social
console.log(n)


let nome = "Jamilton Damasceno"
let resultado = nome.split(" ")
console.log(resultado) //Da pra colocar colchete pra contar diretamente dentro do array, sem precisar de for e o let i = 0

*/

/* 
// EXEMPLO DE COMO FUNCIONA O SLICE NA PRÁTICA
// EXEMPLO MUITO UTILIZADO PARA GERAR TIPOS DE EMAIL
let nome = "gabriel"
let sobrenome = "pimentel"
let s = sobrenome.slice(0, 6)

let email = nome + s + "@empresa.com.br"

console.log( email )


let pesquisa = "pEDRo SilvA"
let itemSalvo = "pedro silva"



// let minusculo = nome.toUpperCase()
let item = pesquisa.toLowerCase()
if (itemSalvo == item){
    console.log("Achei")
}

*/

// console.log(minusculo)
// console.log(maiusculo)

//Exemplo de como funciona o ".trim" e como ele remove os espaços
/* 
let nome = "     Pedro Silva      "
let tirarEspaco = nome.trim()
console.log( tirarEspaco )
*/

//Exemplo prático de .concat
let a = "Olá"
let b = "Gabriel"
let c = "Pimentel"

let string =  a.concat(" ", b, " ", c)
console.log(string)