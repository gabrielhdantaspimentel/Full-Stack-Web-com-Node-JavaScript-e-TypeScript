// SÓ DE EXEMPLO, VAI SER USADA A INFERENCIA DO TS
// let programmer: {name: string; age: number; skill: string[]} 
let programmer = {
    name: 'Gabriel',
    age: 28,
    skills: ['JS', 'TS']
}

programmer.name = 'Pedro'

programmer.age = 15

export function showProgrammer(programmer: { 
    name: string, 
    age: number, 
    skills: string[];
})  {
    console.log(programmer)
} 

showProgrammer(programmer) //PUXANDO OBJETO LITERAL
showProgrammer({name: 'Maria', age: 31, skills: ['Python']}); //OBJETO COM VALOR MANIPULADO