import { Cabecalho, Menu, Acomodacao } from "@/components/interface"

export default function Page(){
    return (
        <div>
            <Cabecalho />
            {/* Menu ja ta dentro de cabecalho */}
            {/* <Menu />  */}
            <hr />
            <Acomodacao />
        </div>
    )
}