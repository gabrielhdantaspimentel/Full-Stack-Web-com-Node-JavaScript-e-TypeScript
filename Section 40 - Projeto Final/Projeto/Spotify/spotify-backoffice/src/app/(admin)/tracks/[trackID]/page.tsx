interface Props {
        params: {
        trackId: string
    },
    searchParams: {
        mode: string,
        showTitle: string,
        anotherParam: string
    }
}

export default async function Page({ params,  searchParams }: Props){
    const p = await params
    const trackId = p.trackId
    const sP = await searchParams
    const mode = sP.mode;
    const showTitle = sP.showTitle
    const anotherParam = sP.anotherParam
    return (
        <>
        <h1>Música ID: {p.trackId}</h1>
        <h1>mode: {mode}</h1>
        <h1>showTitle: {showTitle}</h1>
        <h1>anotherParam: {anotherParam}</h1>
        </>
    )
}
