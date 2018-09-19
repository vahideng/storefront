import * as actionTypes from '../actions/actionType';

const initialState = {
  carts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS_FROM_VIEW_PAGE:
      let updatedCarts = {
        productTitle: action.productTitle,
        productIndex: action.productIndex,
        productCount: action.productCount,
        productBrand: action.productBrand,
        productPrice: action.productPrice,
        totalPrice : action.productTotalPrice
      };

      let newItem = true;
      let carts = state.carts.map(product => {
        if (product.productIndex === action.productIndex) {
          newItem = false;
          return updatedCarts;
        }
        return product;
      });
      return {
        ...state,
        carts: newItem ? state.carts.concat(updatedCarts) : carts
      };

      case actionTypes.REMOVE_PRODUCT :
    updatedCarts= state.carts.filter(product=>product.productIndex !== action.productIndex)

      return {
        ...state,
        carts: updatedCarts
      }

    default:
      return {
        ...state
      };
  }
};

export default reducer;
