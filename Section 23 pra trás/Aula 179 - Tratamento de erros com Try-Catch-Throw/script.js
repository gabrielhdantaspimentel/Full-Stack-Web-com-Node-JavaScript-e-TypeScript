//  Tratamento de erro com Try Catch

function contarQuantidadeLetras ( produto ){
    try {
        console.log( produto.nome.length )
        console.log("teste")
    } catch(erro){
        // tratarErro( erro )
        console.log("Erro ao processar, código de erro: 69eFicaD4")

    } /*finally {                  MENSAGEM QUE SEMPRE APARECE, INDEPENDETE DE TER ERRO OU NÃO
        console.log("finally")
    }*/
}

function tratarErro( erro ){
    throw new Error("Código erro: 164")
}

const produto = {
    nome: "Notebook",
    preco: 1200
}

contarQuantidadeLetras(produto)