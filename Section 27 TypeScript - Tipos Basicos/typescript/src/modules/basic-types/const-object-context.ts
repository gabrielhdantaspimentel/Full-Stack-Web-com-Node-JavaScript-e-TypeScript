type File = {
    name: string,
    size: number
}

/*
const file = {
    name: 'lista_de_funcionarios.txt',
    size: 123456789,
} as const
 */

const file: File = {
    name: 'lista_de_funcionarios.txt',
    size: 123456789,
}


handleFileUpload(file)
 

file.name = 'lista_de_dependentes.txt'


export function handleFileUpload(file: File){
    console.log(`Nome: ${file.name}`)
    console.log(`Tamanho: ${file.size}`)
}

