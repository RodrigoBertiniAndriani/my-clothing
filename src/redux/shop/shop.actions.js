import { ShopActionTypes } from './shop.types';

export const getShopItem = item => ({
  type: ShopActionTypes.GET_SHOP_ITEM,
  payload: item
});