export const bootstrap = ():void => {

    const movies = ['A origem', 'O iluminado', 'ilha do medo']

    // const movie = movies.find(item => item.includes('hadouk'))
    const movie = movies.find(item => item.includes('ilha do'))

    //type guard
    if (movie){
        console.log(movie)
    } else {
        console.warn('Filme não encontrato!')
    }

    //string
    console.log(movie);

    //undefined
    

    //falsy
    console.log(false ? 'truthy' : 'falsy')
    console.log(0 ? 'truthy' : 'falsy')
    // console.log('' ? 'truthy' : 'falsy') 
    // console.log(null ? 'truthy' : 'falsy')
    // console.log(undefined ? 'truthy' : 'falsy')
    console.log(NaN ? 'truthy' : 'falsy')

    // truthy
    console.log(true ? 'truthy' : 'falsy')
    console.log(-1 ? 'truthy' : 'falsy')
    // console.log(' ' ? 'truthy' : 'falsy')
    // console.log([] ? 'truthy' : 'falsy')
    // console.log({} ? 'truthy' : 'falsy')

}