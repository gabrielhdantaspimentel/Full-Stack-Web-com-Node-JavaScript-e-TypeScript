export default function Pagina(){

    const regra = <h1>Maior de idade</h1>
    const nome = 'Gabriel'

    const lista = [
        <h1>Gabriel</h1>,
        <h1>Jose</h1>,
        <h1>Maria</h1>
    ]

    let salario = 1000
    let bonus = 200

    const usuario = {
        nome: 'Gabriel',
        idade: '29',

    }

    function MeuBotao(){
        return <button>Clique aqui</button>
    }

    return (
        <div>
            ola {lista[0]}
            O total recebido é {salario + bonus}
            <br />
            O usuario é {usuario.nome} e a idade é {usuario.idade}
            {MeuBotao()}
        </div>
    )
}