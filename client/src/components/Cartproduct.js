import React from "react";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import phoneImg from "../Assets/Apple.jpeg";
import CartProductDetails from "./CartProductDetails";
import CartProductPrice from "./CartProductPrice";
import { display } from "@mui/system";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";


const PlaceOrderBox = styled(Box)({
  background: 'white',
  display: 'flex',
  justifyContent: 'flex-end'
})
const Cartproduct = () => {
 
  const cartItems = useSelector(state=>state.cart.cartProduct)
  return (
    <Container>
    { cartItems.length>0 ?
    <div>
      <Grid container margin={3}  marginBottom={1} style={ContainerStyle}>
        <Grid item md={8}>
          <Typography variant="h6" padding={3}>
            My Cart
          </Typography>
          <hr />
          {
            cartItems.map(item=><CartProductDetails item={item} key={item.id} />)
          }

        </Grid>
        <Grid item md={4} style={{ padding: '2rem' }}>
          <CartProductPrice />
        </Grid>
      </Grid>
      <Grid container margin={3} marginTop={1} style={ContainerStyle}>
        <Grid item md={12} padding={2} justifyItems={"flex-end"}>
          <PlaceOrderBox>
            <Button
              size="large"
              variant={"contained"}
              style={{ backgroundColor: "#FB641B" }}
            >
              Place Order
            </Button>
          </PlaceOrderBox>
        </Grid>
      </Grid></div>:<EmptyCart/>}
    </Container>
  );
};


const ContainerStyle = {
  backgroundColor: "#FFFFFF",
};

export default Cartproduct;
