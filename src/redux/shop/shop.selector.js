import { createSelector } from 'reselect';

export const selectShop = createSelector(
    // Valor(es) do state que deve ser monitorado 
    (state) => state.shop,
    // Função de acionamento
    (shop) => shop
)

export const selectMappedShopObject = createSelector(
    [selectShop],
    shop => Object.keys(shop).map(key => shop[key])
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShop],
        (collections) => collections[collectionUrlParam]
)