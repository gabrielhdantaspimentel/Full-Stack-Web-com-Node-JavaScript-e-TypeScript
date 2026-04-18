// Pilar - Encapsulamento

/*
class Carro {
    constructor(){
        this.modelo = "Gol"
        this.cor = "Vermelho"
    }
    frear(){
        //freio com tecnologia a tambor
        //-
        //-
        //-
         

        console.log("parar o carro")
    }
}


const carro = new Carro()
carro.frear()
*/


// Encapsulamento, controle de acesso e getter e setters
class ContaBancaria{
    constructor(){
        this._numeroConta = 0
        this._saldo = 0
    }

    sacar( valorSaque ){
        this._saldo = this._saldo - valorSaque
    }

    depositar( valorDeposito ){
        this._saldo = this._saldo + valorDeposito
    }

    //GET E ST SALDO
    get saldo(){
        return this._saldo
    }
    set saldo(novoSaldo){
        if ( novoSaldo > 0 ){
            this._saldo = novoSaldo
        }
    }

    //GET E SET CONTA
    get numeroConta(){
        //Verificar se o usuario está logado
        return "Número: " + this._numeroConta
    }
    set numeroConta( numero ){
        if ( numero > 0 ){
            this._numeroConta = numero
        }
    }

}

const conta = new ContaBancaria()
// conta.numeroConta = -3
// conta.numeroConta = ""

conta.saldo = 500 // segura
conta.sacar(50)
conta.depositar(100)

console.log( conta.saldo )