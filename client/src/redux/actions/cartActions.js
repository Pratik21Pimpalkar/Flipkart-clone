import axios from 'axios'

export const addProductToCart=(id)=>async(dispatch)=>{
    try {
        
        const {data}= await axios.get(`${process.env.REACT_APP_API}product/${id}`)
        dispatch({
            type:"ADD_TO_CART_SUCCESS", payload:data
        })
    } catch (error) {
        dispatch({
            type:"ADD_TO_CART_FAIL", payload:{message:error.message}
        })
        
    }
}

export const removeProductFromCart = (id) => (dispatch) => {
    dispatch({
        type:"REMOVE_FROM_CART",
        payload: id
    })

};