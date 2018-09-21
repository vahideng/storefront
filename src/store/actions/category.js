import * as actionTypes from './actionType';

export const readProductSuccess = product => {
  return {
    type: actionTypes.READ_PRODUCT_SUCCESS,
    product: product
  };
};

export const productNumber = number => {
  return {
    type: actionTypes.PRODUCT_NUMBER,
    productNumber: number
  };
};

export const addProductsFromViewPage = (
  title,
  index,
  count,
  brand,
  price,
  totallPrice
) => {
  return {
    type: actionTypes.ADD_PRODUCTS_FROM_VIEW_PAGE,
    productTitle: title,
    productIndex: index,
    productCount: count,
    productBrand: brand,
    productPrice: price,
    productTotalPrice: totallPrice
  };
};

export const removeProduct = index => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    productIndex: index
  };
};

export const addProducts = name => {
  return {
    type: actionTypes.ADD_PRODUCT,
    index: name
  };
};

export const incrementCounter = (index,count,totalPrice) => {
  return {
    type: actionTypes.INCREMENT_COUNTER,
    index: index,
    count: count,
    totalPrice : totalPrice
   
  };
};

export const decrementCounter = (index,count,totalPrice) => {
  return {
    type: actionTypes.DECREMENT_COUNTER,
    index: index,
    count: count,
    totalPrice : totalPrice
  };
};
