// let total: string | number = 200

// total = '500'

let shoppingCart = [200.75, 150.12, '33,90', '44', 'not defined']

// export function totalize(values: Array<string | number | null >){} 


export function totalize(values: (number | string )[]){ // Retorna o total
    return values
        .map(value => typeof value === 'number' ? value : parseFloat(value))
        .filter(value => !isNaN(value)) //filtrar os valores
        .reduce((acc, curr) => acc + curr , 0 ) //Total

} 

console.log(totalize(shoppingCart))