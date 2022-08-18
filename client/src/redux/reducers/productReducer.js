export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        ...state,
        products: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    case "FETCH_PRODUCTS":
      return {
        products: action.payload
      }
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "REQUEST_PRODUCT":
      return {
        loading: true
      }
    case "SUCCESS_PRODUCT":
      return {
        loading: false,
        product: action.payload
      }
    case "FAIL_PRODUCT":
      return {
        loading: false,
        error: action.payload
      }
    case "RESET_PRODUCT":
      return {
        product: {}
      }
    default:
      return state
  }
}

