let films = ["O iluminado", "A origem"]

// let films: string[] = ["O iluminado", "A origem"]
// let numbers: number[] = [1, 2]


//TIPO GENÉRICO
// let films: Array<string> = ["O iluminado", "A origem"]
// let numbers: Array<number> = [1, 2]

export function toUpperCaseString(arr: Array<string>){
    return arr.map(value =>  value.toUpperCase())
}

console.log(toUpperCaseString(films))