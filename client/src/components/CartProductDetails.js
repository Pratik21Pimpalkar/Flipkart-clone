import { Button, Grid, Typography } from '@mui/material'
import phoneImg from "../Assets/Apple.jpeg";
import React from 'react'
import { removeProductFromCart } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const CartProductDetails = ({ item }) => {
    const dispatch =useDispatch()
    const removeProduct=()=>
    {
        dispatch(removeProductFromCart(item.id))
    }
    return (
        <Grid container padding={5} paddingRight={0}>
            <Grid item md={5} justifyContent={"center"} >
                <div style={{height:"10rem",width:"10rem"}}>
                <img src={item.img}  alt=""  style={{width:"100%",height:"100%", objectFit:"contain"}}/>
                </div>
            </Grid>
            <Grid item md={7}>
                <Typography variant="body">
                    {item.title}
                </Typography>
                <div
                    style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                    <Typography
                        variant="h6"
                        style={{ marginTop: "1rem", textDecoration: "line-through", color: "#878797", fontSize: "1rem", }}
                    >
                        {item.mrp}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{ marginTop: "1rem", fontSize: "1.3rem" }}
                    >
                       {item.price}
                    </Typography>
                </div>
                <Button
                onClick={removeProduct}
                    variant="text"
                    style={{
                        fontWeight: "600",
                        color: " rgb(255 255 255)",
                        border: "1px solid #ff000096",
                        fontSize: "1rem",
                        textTransform: "capitalize",
                        marginTop: "1rem",
                        background: "#ff6565",
                    }}
                >
                    Remove
                </Button>
            </Grid>
        </Grid>
    )
}

export default CartProductDetails