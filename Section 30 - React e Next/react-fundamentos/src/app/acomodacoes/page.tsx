import { Acomodacao, Cabecalho, Menu, Rodape, Conteudo } from "@/components/interface"

export default function Pagina(){
    const nome = 'Gabriel'

    return (
        <div>
            <Cabecalho 
            titulo="Airbnb"
            subtitulo="Minhas acomodações"
            />

            <Menu />

            <Conteudo titulo="Página Início">
                <h1>Página de Acomodações</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo quibusdam autem fuga cumque, dolorem debitis ipsam ducimus iste ullam natus? Quas distinctio consequatur nobis maxime ratione impedit minima architecto?</p>
            </Conteudo>

            <Rodape />

        </div>
    )
}