let filmArray: (number | string | boolean)[] = [1, "Get Out", true];

// TIpo tuple
//Ele só define o tipo na entrada e deixa a posição como regra
let filmTuple: [number, string, boolean] = [
    1,
    'hadouken',
    true
];

let filmeTupleOpicionalPosition: [number, string, boolean?, string?] = [
    2,
    'teste string',
    false
];


const [idArr, titleArr, availableArr] = filmArray

//Exemplo de que da erro por não seguir o tuple acima
const [id, title, available] = filmTuple 

console.log(id)