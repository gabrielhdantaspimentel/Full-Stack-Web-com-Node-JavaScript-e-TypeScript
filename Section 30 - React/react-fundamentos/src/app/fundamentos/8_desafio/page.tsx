'use client'

import { useState } from "react"

export default function Entrada(){

     

    return (
        <div className="p-2">
            <h1>Calculo IMC</h1>
            <hr />

            <p>Digite seu peso</p>
            <input 
            placeholder="ex: 90"
            className="campo-texto"
            type="text"
            /> KG

            <br />

            <p>Digite seu peso</p>
            <input 
            placeholder="ex: 1.83"
            className="campo-texto"
            type="text"
            /> KG

            <br />
            <br />

            <button
            className="botao"
            >
                Calcular
            </button>

            <br />
            
            <h4>Valor digitado: {}</h4>

        </div>
    )
}