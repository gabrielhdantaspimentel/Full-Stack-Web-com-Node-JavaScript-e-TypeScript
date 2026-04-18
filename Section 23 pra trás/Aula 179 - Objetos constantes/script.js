//Produto 

const produto = {
    nome: "Notebook"
}

// Object.freeze( produto )
produto.nome = "Celular"
produto.preco = 120

produto.nome = "Celular"
console.log(produto.nome)
