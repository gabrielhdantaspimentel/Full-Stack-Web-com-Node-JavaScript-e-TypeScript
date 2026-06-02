import { useState } from 'react'

import ConteudoDireta from "./ConteudoIndireta"

interface AbaProps {
    atualizar( nome: string ): void
}

export default function AbaIndireta( props: AbaProps ){//Pai
    return (
        <div>
            <button onClick={() => props.atualizar('Conversas')}>Conversas</button>
            <button onClick={() => props.atualizar('Atualizações')}>Atualzações</button>
            <button onClick={() => props.atualizar('Chamadas')}>Chamadas</button>
        </div>
    )
}