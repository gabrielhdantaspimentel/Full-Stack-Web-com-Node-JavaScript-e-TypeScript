//TODO CartItem
type CartItem = {
  id: number;
  price: number;
};

type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Address[];
};

//TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};

//TODO criar variável do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 1546, price: 254 },
    { id: 7894, price: 987 },
  ],
};

const addresses: Address[] = [
  { cep: '00000-000', default: false },
  { cep: '00000-000', default: true },
  { cep: '00000-000', default: false },
];

const customer: Customer = {
  addresses: addresses,
};

//--

// let calculateTotal: (sC: ShoppingCart) => number

let calculateTotal: (sC: ShoppingCart) => number = function (shoppingCart: ShoppingCart) {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  return total;
}

type AddressOrUndefined = (c: Customer) => Address | undefined

const getPrincipalAddress: AddressOrUndefined = (customer: Customer): Address | undefined =>  {
  return customer.addresses.find((address) => address.default === true);
}

//--


const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$${total.toFixed(2)}`);



const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
  console.log(principalAddress);
}

export { calculateTotal, getPrincipalAddress }