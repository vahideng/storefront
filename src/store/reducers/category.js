import * as actionTypes from '../actions/actionType';
//import { updateObject } from '../actions/Utility';

const initialState = {
  product: [],
  productNumber: null,
};

// const readInit = (state , action) => {
//   return [
//     ...state,
//     {
//       product: state.proudct.concat(action.product)
//     }
//   ];
// };

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
