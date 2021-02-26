import { createSelector } from 'reselect';

// Selector dos Items (Monitora o cart)
export const selectCartItems = createSelector(
    // Valor(es) do state que deve monitorar, 
    // se o cart modificar, aciona a função
    (state) => state.cart,
    // Função de acionamento
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    (state) => state.cart,
    (cart) => cart.hidden
)