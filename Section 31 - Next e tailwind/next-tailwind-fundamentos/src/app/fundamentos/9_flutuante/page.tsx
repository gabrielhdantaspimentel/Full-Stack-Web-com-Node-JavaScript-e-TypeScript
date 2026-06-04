import Image from "next/image"

export default function Aplicacao(){
    return (
    <div className='border p-3'>

        <Image 
        className="float-left m-2"
        src="/img/imagem-fundo.jpg"
        alt='Descrição'
        width={200}
        height={200}
        />

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptas, iusto quos placeat aspernatur suscipit
            cum dignissimos culpa nam quo. 
            Nostrum, harum error eaque beatae facilis nisi. 
            Iste asperiores consectetur molestiae.
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptas, iusto quos placeat aspernatur suscipit
            cum dignissimos culpa nam quo. 
            Nostrum, harum error eaque beatae facilis nisi. 
            Iste asperiores consectetur molestiae.
        </p>

    </div>
    )
}