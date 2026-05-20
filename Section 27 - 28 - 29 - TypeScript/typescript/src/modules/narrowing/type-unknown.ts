export const bootstrap = (): void => {
    let valueUnknown: unknown   // Tipo é desconhecido
    // valueUnknown = [1, 2, 3]
    // valueUnknown = {a: 1, b: 2}

    // valueUnknown = 'String teste 123'

    valueUnknown = 42,75
    // let valueAny: any   // Pode assumir qualquer tipo
    // valueAny.toFixed();

    function processDataWithUnkown(value: unknown){
        if (Array.isArray(value)){
        value.map(item => console.log(item))
        }

        if (value instanceof Object){
            if('b' in value){
                console.log(value.b)
            }
        }

        if (typeof value === 'string' ){
            console.log(value.toUpperCase())
        }

        if (typeof value === 'number' ){
                console.log(value.toFixed(0))
            }
        }

    processDataWithUnkown(valueUnknown)

    /* EXEMPLO
    // por esse motivo o UNKNOWN é o pai de todos os dados
    // somente depois de uma validação segura ele pode ser manipulado
    // if ( typeof valueUnknown == "number" ){
    //     valueUnknown.toFixed();
    // }
     */
    }