import { Cabecalho, Menu, Acomodacao } from "@/components/interface"

export default function Page(){
    return (
        <div>
            <h1 className="bg-green-500">Título propriedades</h1>
            <Cabecalho 
            titulo="São Roque, Brasil" 
            preco='R$350,00'
            />

            <hr />
            <Acomodacao />
            <Cabecalho 
            titulo="Campos do Jordão Brasil" 
            preco='R$500,00'
            />
        </div>
    )
}