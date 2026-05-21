function Acomodacao(){
    return (
        // EXEMPLO DE TAG VAZIA QUE O CÓDIGO JSX ACEITA
         <> 
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc: Perto de Vinícola Goes</p>
        </>
    )
}

export default function Page(){
    const nome = 'Gabriel'

    return (
        <div>
            {Acomodacao()}
            <hr />
            {Acomodacao()}
            <hr />
            {nome}
        </div>
    )
}