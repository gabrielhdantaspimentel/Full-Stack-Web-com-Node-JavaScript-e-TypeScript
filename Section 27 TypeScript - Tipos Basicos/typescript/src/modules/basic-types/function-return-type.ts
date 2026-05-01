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

console.log('Detalhes do customer', customer);

export function calculateTotal(shoppingCart: ShoppingCart): number {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  return total;
}

const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$${total.toFixed(2)}`);

export function getPrincipalAddress(customer: Customer): Address | undefined {
  return customer.addresses.find((address) => address.default === true);
}

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
  console.log(principalAddress);
}
