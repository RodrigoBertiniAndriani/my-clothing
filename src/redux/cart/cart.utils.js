const existingCartItem = (cartItems, cardItem) => cartItems.find(
  cartItem => cartItem.id === cardItem.id
);

const addItemToCart = (cartItems, cartItemToAdd) => {
    if (existingCartItem(cartItems, cartItemToAdd)) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemToCart = (cartItems, cartItemToRemove) => {
  if(existingCartItem(cartItems, cartItemToRemove).quantity === 1){
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cardItem => cardItem.id === cartItemToRemove.id 
    ? {...cardItem, quantity: cardItem.quantity -1}
    : cardItem
  )
}

export {
  addItemToCart, 
  removeItemToCart
}