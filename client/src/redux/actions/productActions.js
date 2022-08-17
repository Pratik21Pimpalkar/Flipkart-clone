import axios from "axios";

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "REQUEST_PRODUCT"
    })
    const { data } = await axios.get(`${process.env.REACT_APP_API}product/${id}`)
    dispatch({
      type: "SUCCESS_PRODUCT", payload: data
    })

  } catch (error) {

  }
}

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}products`)
  dispatch({
    type: "FETCH_PRODUCTS", payload: data
  })

}


export const CartProducts = (product) => {
  return {
    type: "CART_PRODUCT",
    payload: product,
  };
};
