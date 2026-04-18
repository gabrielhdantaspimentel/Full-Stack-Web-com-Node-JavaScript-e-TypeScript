class Usuario {
    constructor(){
        this.email = ""
        this.senha = ""
        this.subtotalCompra = 0
    }

    logar(){

        let emailBD = "ja@gmail.com"
        let senhaBD = "1234"

        if( senhaBD == this.senha ){
            // console.log("Senha válida")
            return "senha válida"
        } else {
            // console.log("Senha inválida")
            return "senha inválida"
        }

    }

    calcularDesconto( cupom ){
        
        let desconto = 0
        if (cupom == "DESC20"){
            desconto = 20
        }else if (cupom === "FEST10") {
            desconto = 10
        }

        return  this.subtotalCompra - desconto


    }

}

const usuario = new Usuario()
usuario.subtotalCompra = 500
usuario.calcularDesconto("DESC20")

/*
usuario.email = "ja@gmail.com"
usuario.senha = "1234"

let mensagem = usuario.logar()
console.log(mensagem)
*/