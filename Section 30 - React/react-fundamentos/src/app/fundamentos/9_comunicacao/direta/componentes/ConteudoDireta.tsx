interface ConteudoProps {
    nome: string
}

export default function ConteudoDireta( props: ConteudoProps ){
    return (
        <div>
            <span>{props.nome}</span>
        </div>
    )
}