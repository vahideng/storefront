import * as actionTypes from '../actions/actionType';
//import { updateObject } from '../actions/Utility';

const initialState = {
  product: [],
  productNumber: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.READ_PRODUCT_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        product:  action.product
      };
      case actionTypes.PRODUCT_NUMBER:
      return{
        ...state,
        productNumber : action.productNumber
      }
    default:
      return state;
  }
};

export default reducer;
