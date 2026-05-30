import ConteudoDireta from "./ConteudoDireta"

import { useState } from 'react'

export default function AbaDireta(){

    const [aba, setAba] = useState('')

    return (
        <div>

            <button onClick={()=> setAba('Conversas')}>Conversas</button>
            <button onClick={()=> setAba('Atualzações')}>Atualzações</button>
            <button onClick={()=> setAba('chamadas')}>chamadas</button>

            <ConteudoDireta nome={aba} />

        </div>
    )
}