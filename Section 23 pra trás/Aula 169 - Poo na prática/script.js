// Procedural


// function verificarDisponibilidade(quartos,ocupados){
//     let res = quartos - ocupados
//     console.log("Disponíveis: " + res)
// }

// let quartos = 20
// let ocupados = 5

// verificarDisponibilidade(quartos,ocupados)


//Orientado a objetos

const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDiponibilidade: function(){
        return this.quartos - this.ocupados
        console.log("Disponíveis: " + res)
    }
}

hotel.ocupados = 5
hotel.verificarDiponibilidade()