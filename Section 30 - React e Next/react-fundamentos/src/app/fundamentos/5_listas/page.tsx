export default function Page(){
    
        const users = [
            {id: 1, name: "Gabriel", email: "g@gmail.com"},
            {id: 2, name: "Henrique", email: "h@gmail.com"},
            {id: 3, name: "Icaro", email: "i@gmail.com"},
            {id: 4, name: "Abel", email: "a@gmail.com"},
        ]

        const list = users.map( user =>
            <li key={user.id}> 
                {user.name} ( {user.email} ) 
            </li>

        )

    return (
        <ul>
            {list}
        </ul>
    )
    
}