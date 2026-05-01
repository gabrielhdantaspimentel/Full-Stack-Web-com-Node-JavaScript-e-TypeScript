//TODO CartItem
type CartItem = {
  id: number;
  price: number;
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

//TODO função do tipo void para somar os valores dos itens
export function calculateTotal(shoppingCart: ShoppingCart): void {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  console.log(`Total do carrinho: R$${total.toFixed(2)}`);
}

calculateTotal(shoppingCart);
