import { useState } from "react"
import AbaIndireta from "./AbaIndireta"

export default function ConteudoIndireta(){

    const [aba, setAba] = useState('Padrão')

    function alterarNome( nome: string ){
        setAba(nome)
    }

    return (
        <div>
            <AbaIndireta atualizar={alterarNome}/>
            <hr />
            <span>{aba}</span>
        </div>
    )
}