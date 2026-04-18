//herança - Reutilização e manutenção
// Classe: Cao Passro

class Animal { //Superclasse Pai
    constructor(pCor, pTamanho, pPeso){
        // console.log("construtor animal")
        this.cor = pCor
        this.tamanho = pTamanho
        this.peso = pPeso
    }

    correr(){
        console.log("correr")
        console.log("como")
        console.log("um")
    }

    dormir(){
        console.log("dormir")
    }
}

class Cao extends Animal { //Subclasse Filha
    constructor(pCor, pTamanho, pPeso, pOrelha){
        super(pCor, pTamanho, pPeso) // super()  acessa construtor, atributo ou método da classe pai
        // super.correr()
        this.tamanhoOrelha = pOrelha
    }

    correr(){
        // super.correr()
        console.log("cão")
    }

    latir(){
        console.log("latir")
    }
}

class Passaro extends Animal { //Subclasse Filha

    correr(){
        super.correr()
        console.log("passaro")
    }

    voar(){
        console.log("voar")
    }
}

class Papagaio extends Passaro {

    constructor(pCor, pTamanho, pPeso ){
        super(pCor, pTamanho, pPeso)
        // super.correr()
        this.sabeFalar = true
    }

    falar(){
        console.log("falar")
    }
}


//Instacia 

const papagaio = new Papagaio ("Vermelho", 20, 1, true)
console.log( papagaio.sabeFalar)



// const animal = new Animal("Amarelo", 60, 3)

// const cao = new Cao("Amarelo", 60, 3, 5)
// console.log(cao.peso)

// console.log(animal.cor)


// const cao = new Cao()
// const passaro = new Passaro()
// const papagaio = new Papagaio()





// papagaio.correr()
// papagaio.voar()


// cao.correr()
// cao.tamanho = 50
// console.log( cao.tamanho )

// passaro.correr()
// passaro.cor = "amarelo"
// console.log( passaro.cor )



// cao.correr()
// cao.latir()
// passaro.correr()
// passaro.voar()