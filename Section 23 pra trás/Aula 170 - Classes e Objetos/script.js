/*
const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        return "Disponível: " + res
    }
}

// hotel.quartos = 25

// hotel['quartos'] = 30

// hotel.piscinas
// delete hotel.piscinas
console.log(hotel.piscinas)
*/

//Notação de construtor

/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
        let res = this.quartos - this.ocupados
        return "Disponível: " + res
    }

console.log()
*/


// Criando classes (mais simples)
class Hotel {

    

    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }

}

const hotel = new Hotel()
console.log(hotel.quartos)