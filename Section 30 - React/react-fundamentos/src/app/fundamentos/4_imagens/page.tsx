import Image from "next/image"

export default function Page(){

    const usuario = {
        nome: "Gabriel",
        urlPerfil: "https://assets-lp.aiease.ai/ea-assets/headshot-generator/AI-generated-male-headshot-example-from-AI-Ease-1.webp" 
    }

    return (
        <div>
        <h1>Imagem</h1>
        <Image 
        src="/img/gabriel.png"
        alt={ "Nome"+ usuario.nome }
        width={400}
        height={550}
        />

        {/* <img 
        // src={usuario.urlPerfil}
        src="/img/gabriel.png"
        alt={ "Nome"+ usuario.nome }
        style={
            {width: 400, height: 550}
        }
        /> */}

        </div>
    )
}