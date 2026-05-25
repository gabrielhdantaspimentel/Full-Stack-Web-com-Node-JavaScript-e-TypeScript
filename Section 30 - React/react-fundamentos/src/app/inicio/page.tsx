import { Acomodacao, Cabecalho, Menu, Rodape, Conteudo } from "@/components/interface"

export default function Pagina(){
    const nome = 'Gabriel'

    return (
        <div>
            <Cabecalho 
            titulo="Airbnb"
            subtitulo="Inicio"
            />

            <Conteudo titulo="Página Início">
                <h1>Página de início</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum, praesentium illum tempora minus incidunt molestiae sunt sed</p>
            </Conteudo>

            <Rodape />

        </div>
    )
}