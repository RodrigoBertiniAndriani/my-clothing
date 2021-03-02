import { createSelector } from 'reselect';

export const selectShop = createSelector(
    // Valor(es) do state que deve ser monitorado 
    (state) => state.shop,
    // Função de acionamento
    (shop) => shop.collection
)