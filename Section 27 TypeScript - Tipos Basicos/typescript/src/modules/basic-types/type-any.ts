//Sempre bom evitar esse tipo "any"

export function handleFileUpload(file: any){
    console.log(`Nome: ${file.name}`)
    console.log(`Tamanho: ${file.size}`)

}

const file = {
    name: 'lista_de_funcionarios.txt',
    size: 123456789,
}
handleFileUpload(file)