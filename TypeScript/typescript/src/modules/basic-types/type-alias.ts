type Salary = string | number

type Programmer = { 
    name: string, 
    age: number, 
    skills: string[],
    contact: {email: string; phone: string},
    salary?: Salary //Deixando como atributo opcional com a "?"
}

export function showProgrammer(programmer: Programmer)  {
    console.log(programmer)
} 

showProgrammer({
    name: 'Maria', 
    age: 31, 
    skills: ['Python'],
    contact: {email: 'email@email.com', phone: '11 40028922'},
    salary: 80
});