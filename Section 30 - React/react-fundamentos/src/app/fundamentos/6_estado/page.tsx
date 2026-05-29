'use client'

import { useState } from "react"

export default function Page(){

    // let numero = 0
    let [numero, setNumero] = useState(10) 
    // Vai retornar um array [numero, funcao]
    //useState(0) - Valor inicial sempre fica dentro do parenteses
    function incrementar(){  
        // numero += 1
        setNumero( numero + 1 )
        // console.log("Numero " + numero)
    }

    function decrementar(){  
        // numero += 1
        setNumero( numero - 1 )
        // console.log("Numero " + numero)
    }

    return (
        <div>
            <h1>Estados</h1>
            <button 
            onClick={incrementar}
            className="
            bg-blue-200
            text-black
            rounded
            p-2
            ">
                Incrementar
            </button> 

            <br />

            <button 
            onClick={decrementar}
            className="
            bg-red-200 text-black mt-1 rounded p-2
            ">
                Decrementar
            </button> 



            <p>Numero : { numero }</p>


        </div>
    )
}