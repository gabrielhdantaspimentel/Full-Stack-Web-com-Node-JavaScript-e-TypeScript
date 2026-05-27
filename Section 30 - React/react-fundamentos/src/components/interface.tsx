import Link from "next/link"

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
        <div className="bg-gray-400">
            <MenuItem texto="Home" url="/inicio" />
            <MenuItem texto="Acomodações" url="/acomodacoes" />
            <MenuItem texto="Ajuda" url="/inicio" />
        </div>
    )
}

export function MenuItem( props: any ){
    return (
        <Link href={props.url} className="p-2" >
            {props.texto}
        </Link>
    )
}

export function Cabecalho( props: any ){
    return (
        <div className="bg-blue-300">
            <p>{props.titulo}</p>
            <p>{props.subtitulo}</p>
        </div>
    )
}

export function Rodape(){
    return (
        <div className="bg-blue-300">
            <p>Rodape</p>
        </div>
    )
}

export function Conteudo( props: any ){
    console.log(props)
    return (
        <div className="bg-gray-300">
            {props.children}
        </div>
    )
}