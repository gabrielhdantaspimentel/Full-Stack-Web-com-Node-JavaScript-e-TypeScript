'use client'

import { useState } from "react"

export default function Entrada(){

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [resultado, setResultado] = useState('')

     function calcularImc(){
        const p = parseFloat(peso)
        const a = parseFloat(altura)

        const imc = p / (a * a)

        if ( imc <= 18 ){
            setResultado('Abaixo do peso')
        } else if ( imc > 18 && imc < 25 ){
            setResultado('Peso normal')
        } else {
            setResultado('Sobrepeso')
        }

     }

    return (
        <div className="p-2">
            <h1>Calculo IMC</h1>
            <hr />

            <p>Digite seu peso</p>
            <input 
            value={peso}
            onChange={e=>setPeso(e.target.value)}
            placeholder="ex: 90"
            className="campo-texto"
            type="text"
            /> KG

            <br />

            <p>Digite sua altura</p>
            <input 
            value={altura}
            onChange={e=>setAltura(e.target.value)}
            placeholder="ex: 1.83"
            className="campo-texto"
            type="text"
            /> metros

            <br />
            <br />

            <button
            onClick={calcularImc}
            className="botao"
            >
                Calcular
            </button>

            <br />

            <h4>Valor digitado: {resultado}</h4>

        </div>
    )
}