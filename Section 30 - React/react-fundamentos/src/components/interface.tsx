export function Acomodacao(){
    return (
        // EXEMPLO DE TAG VAZIA QUE O CÓDIGO JSX e TSX ACEITA
         <> 
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc: Perto de Vinícola Goes</p>
        </>
    )
}

export function Menu(){
    return (
        <div className="bg-yellow-500">
            Acomodações | Experiências
        </div>
    )
}

export function Cabecalho( props: any ){
    return (
        <div className="bg-blue-800">
            <p>{props.titulo}</p>
            <p>{props.subtitulo}</p>
        </div>
    )
}

export function Rodape(){
    return (
        <div className="bg-green-700">
            <p>Rodape</p>
        </div>
    )
}

export function Conteudo( props: any ){
    console.log(props)
    return (
        <div className="bg-red-700">
            {props.children}
        </div>
    )
}