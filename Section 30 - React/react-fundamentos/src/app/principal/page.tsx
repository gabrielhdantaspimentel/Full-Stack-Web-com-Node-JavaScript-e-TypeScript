import { Acomodacao, Cabecalho, Menu } from "@/components/interface"

export default function Pagina(){
    const nome = 'Gabriel'

    return (
        <div>
            {Cabecalho()}
            <hr /> 
            {Acomodacao()}
            <hr />
            {nome}
        </div>
    )
}