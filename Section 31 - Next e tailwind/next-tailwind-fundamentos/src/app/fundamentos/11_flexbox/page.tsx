export default function Aplicacao(){
    return (

    // flex flex-row-reverse flex-wrap
    // order-2 grow justify-between
    // border-4 p-3 h-screen flex flex-row gap-2 justify-evenly items-start
    <div className='border-4 p-3 flex gap-2'>
        <div className="caixa w-48 grow-0 shrink-0">Caixa 1</div>
        <div className="caixa w-72 grow shrink">Caixa 2</div>
        <div className="caixa w-96 grow-0 shrink-0">Caixa 3</div>
    </div>
    )
}