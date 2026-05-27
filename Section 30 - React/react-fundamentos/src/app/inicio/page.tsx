import { Acomodacao, Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"
import PaginaSite from "@/components/PaginaSite"

export default function Pagina(){
    return (
        <PaginaSite 
        titulo="AirBnb"
        subtitulo="Início"
        >
        <h1>Página Início</h1>
        <img
            src="/img/gabriel.png"
            style={ {width:90, height: 90}}
        />
        <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Praesentium odio 
            vero vel beatae ab odit dolorem 
            doloremque dolores vitae? Provident 
            illum at nesciunt, libero blanditiis 
            laboriosam culpa repudiandae sint 
            facere?
        </p>
        </PaginaSite>    
    )
}