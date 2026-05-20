// let logType:string = 'info'
// logType = "warn"

// let logType: 'info'
// logType = 'error' 

type logType = 'info' | 'warn' | 'error'

export function logger(type:logType , message: string){
    switch(type){
        case 'info':
            console.log(`Info: ${message}`)
            break;

        case 'warn':
            console.warn(`Warn: ${message}`)
            break;

        case 'error':
            console.error(`Error: ${message}`)
            break;
    }
}

logger("error", 'log com alguma informação sobre o que houve')