'use client'

export default function Page(){

    let numero = 0

    function incrementar(){  
        numero += 1
        console.log("Numero " + numero)
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
                Teste
            </button>

            <p>Numero : { numero }</p>


        </div>
    )
}