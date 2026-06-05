
export default function Aplicacao(){
    return (
    
        // <div className="border-4 p-3 grid grid-cols-4 gap-2">
        // <div className="border-4 p-3 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        //justify-items-start, justify-items-stretch,  justify-items-center
        //content-start
        <div className="border-4 p-3 h-screen grid gap-2 grid-cols-4 content-evenly items-center">
            {/* <div className="caixa col-start-2 col-end-4">Caixa 1</div>         */}
            {/* <div className="caixa col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">Caixa 1</div>         */}
            <div className="caixa">Caixa 1</div>        
            <div className="caixa h-52">Caixa 2</div>        
            <div className="caixa">Caixa 3</div>
            <div className="caixa">Caixa 4</div>        
            <div className="caixa">Caixa 5</div>        
            <div className="caixa">Caixa 6</div> 
            <div className="caixa">Caixa 7</div>        
            <div className="caixa">Caixa 8</div>        
            <div className="caixa">Caixa 9</div>      
        </div>
    )
}