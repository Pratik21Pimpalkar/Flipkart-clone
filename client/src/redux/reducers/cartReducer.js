export const cartReducer = (state = { cartProduct: [] }, action) => {
    switch (action.type) {
      case "ADD_TO_CART_SUCCESS":
        const product = action.payload
        const isExist = state.cartProduct.find(item => item.id === product.id)
        if (isExist)
          return {
            ...state, cartProduct: state.cartProduct.map(item => item.product === isExist.product ? product : item)
          }
        return { ...state, cartProduct: [...state.cartProduct, product] }
  
      case "REMOVE_FROM_CART":
        return {
          ...state, cartProduct: state.cartProduct.filter(product => product.id !== action.payload)
        }
      default:
        return state
    }
  
  }