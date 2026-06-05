import Image from "next/image"

export default function Aplicacao(){
    return (
        <div className="bg-black">
            <h1 className="text-orange-300">Cores</h1>
            <h1 className="text-orange-300/100">Cores</h1>
            <h1 className="text-orange-300/75">Cores</h1>
            <h1 className="text-orange-300/50">Cores</h1>
            <h1 className="text-orange-300/25">Cores</h1>
            
            <h1 className="text-[#50d71e]">Cor Personlizada</h1>
            <h1 className="text-orange-300 hover:bg-yellow-600">Cor com hover</h1>

            <button className="text-[#50d71e]">Botao legal</button>

            <h1 className="h-96 
            bg-[url(/img/nuvem.png)]
            bg-pink-300
            bg-no-repeat
            bg-left-top
            ">Fundo imagem</h1>
        </div>
    ) 
}