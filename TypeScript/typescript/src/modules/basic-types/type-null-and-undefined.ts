export const bootstrap = ():void => {
    // console.log("Null and undefined")

    //null
    let title = null
    console.log('Title: ', title);
    console.log("Title (if): ", title ? 'verdadeiro' : 'falso');
    console.log('Tipo null ', typeof title) //Bug que retorna um objeto

    //undefined
    let subtitle = undefined
    console.log("Subtitle: ", subtitle);
    console.log('Subtitle (if): ', subtitle ? 'verdadeiro': 'falso');
    console.log('Tipo null ', typeof subtitle)


    type Page = {
        title: string,
        subtitle?: string,
        handlerPage?: () => void 
    }

    const page: Page = {
        title: 'Curso de typescript'
    }

    page.handlerPage = ():void => {
        console.log('Executou a função');
    }

    console.log('Page subtitle: ', page.subtitle );
    console.log('Page handlerPage: ', page.handlerPage);
    console.log('Page handlerPage: ', page.handlerPage());

}