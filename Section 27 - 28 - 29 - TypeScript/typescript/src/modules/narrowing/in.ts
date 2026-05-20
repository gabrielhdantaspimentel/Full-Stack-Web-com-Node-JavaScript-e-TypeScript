export const bootstrap = ():void => {
    type item = {
        id: string; // uuid
        [key: string] : string | null // Index signature
    }

    // fetch para um end-point de uma API

    const response: item[] = [
        {id: 'asdnj2nd189hsa', movie: 'Cinderella Man'},
        {id: 'e21ino4a', song: 'Ideologia'},
        {id: '13m2lkmlkmfasdkasd', song: 'Blind'},
    ]

    function showItems(items: item[]): void {
        const body = document.querySelector('body')

        if(body instanceof HTMLBodyElement){
            items.map(item => {
                const itemElement = document.createElement('div')

                if ( 'song' in item ){
                    itemElement.textContent = item.song;
                    itemElement.style.background = 'seagreen';
                } else if ( 'movie' in item){
                    itemElement.textContent = item.movie;
                    itemElement.style.background = 'cadetblue';
                }

                body.appendChild(itemElement)
            })
        }
    }

    showItems(response)

}