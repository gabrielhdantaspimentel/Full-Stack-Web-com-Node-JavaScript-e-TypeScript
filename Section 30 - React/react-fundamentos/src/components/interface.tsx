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
        <div className="bg-blue-700">
            <h1>Logo</h1>
            <p>{props.titulo}</p>
            <p>{props.preco}</p>
            {Menu()}
        </div>
    )
}