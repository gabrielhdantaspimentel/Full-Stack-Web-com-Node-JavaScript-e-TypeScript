interface Props {
    params: {
        trackId: string
    }
}

export default async function Page({params}: Props){
    const p = await params
    console.log(p)
    return <h1>Música ID {p.trackId}</h1>
}