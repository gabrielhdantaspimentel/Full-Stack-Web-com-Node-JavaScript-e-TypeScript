////////////////////////////////////////////////////////
//              EXERCICIO AULA 332                    //
//                  FIZ SOZINHO                       //
////////////////////////////////////////////////////////

'use client'

import { useState } from 'react'

export default function PageIMC(){
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [result, setResult] = useState(0)
    const [message, setMessage] = useState<string>('')

    console.log(typeof weight)
    console.log(typeof height)

    function calculate(){
        const ajustHeight = height / 100
        setResult ( weight / (ajustHeight ** 2) )
        if ( result < 18.5 ){
            setMessage('Está baixo')
        } else if ( result >= 18.5 && result <= 24.9 ) {
            setMessage('Está na média')
        } else {
            setMessage('Está alto!')
        }
    }

    function changeWeight(e: React.ChangeEvent<HTMLInputElement>){
        setWeight ( Number(e.target.value) )        

    }

    function changeHeight(e: React.ChangeEvent<HTMLInputElement>){
        setHeight ( Number(e.target.value) )
    }

    return (
        <div className="bg-green-200 p-2 rounded">
            <h1
            className="bg-green-400 p-2 rounded"
            >
                Calcular IMC
            </h1>

            <p>Digite seu peso</p>
            <input 
            value={weight}
            onChange={changeWeight}
            className="campo-texto"
            type='number'/>

            <br/>
            <br/>

            <p>Digite sua altura</p>
            <input 
            value={height}
            onChange={changeHeight}
            className="campo-texto"
            type='number'/>

            <br/>
            <br/>

            <button 
            onClick={(calculate)}
            className="bg-blue-200 p-2 rounded hover:bg-blue-700 active:bg-green-400">
                Calcular
            </button>

            {result > 0 && (
                <div>
                    <p>Seu IMC é: {result.toFixed(2)}</p>
                    <p>{message}</p>
                </div>
            )}
            
        </div>
    )
}