export const bootstrap = ():void => {
    // let title: HTMLElement | undefined
    const title = document.getElementById('title')
    const subtitle = document.getElementById('subtitle')

    //Leitura segura
    console.log('title: ', title?.innerText)
    console.log('subtitle: ', subtitle?.innerText)
    console.log('subtitle color: ', subtitle?.style)

    // Atribuição 
    if (subtitle){
        subtitle.style.color = 'red'
    }
    
}