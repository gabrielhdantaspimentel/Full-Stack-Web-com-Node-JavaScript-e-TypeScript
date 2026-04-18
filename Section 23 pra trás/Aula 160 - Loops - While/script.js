let postagens = [
    "Hoje passeando",
    "Comendo pastel",
    "Na piscina",
    "Fazendo cocô",
    "Joguei capoeira"
]


const totalPostagens = postagens.length
console.log(totalPostagens)

let numero = 0

while ( numero < totalPostagens ) {
    console.log("IMAGEM " + numero)
    console.log( postagens[numero] )
    console.log("---")
    numero = numero + 1
}