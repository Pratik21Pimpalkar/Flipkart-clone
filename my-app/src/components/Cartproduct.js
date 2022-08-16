import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import phoneImg from "../Assets/Apple.jpeg";

const Cartproduct = () => {
  return (
    <Container>
      <Grid container marginTop={3} style={ContainerStyle}>
        <Grid item md={7}>
          <Typography variant="h6" padding={3}>
            My Cart
          </Typography>
          <hr />

          <Grid container padding={5} paddingRight={0}>
            <Grid item md={3} justifyContent={"center"}>
              <img src={phoneImg} width={66} alt="" />
            </Grid>
            <Grid item md={5}>
              <Typography variant="body">
                {" "}
                POCO M4 Pro (Cool Blue, 64 GB)
              </Typography>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "1rem",
                    textDecoration: "line-through",
                    color: "#878797",
                    fontSize: "1rem",
                  }}
                >
                  {" "}
                  ₹75000
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginTop: "1rem", fontSize: "1.3rem" }}
                >
                  {" "}
                  ₹56000
                </Typography>
              </div>
              <Button
                variant="text"
                style={{
                  fontWeight: "600",
                  color: "#212121",
                  fontSize: "1rem",
                  marginTop: "1rem",
                }}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} style={{padding:'2rem'}}>
          <Typography variant="h5" style={{borderBottom:"1px solid #121212"}}>Price Details</Typography>
          <div style={{marginTop:"2rem"}}>
            <PriceSection>
              <Typography variant="h6" style={{marginRight:'auto',fontSize: "1.05rem",fontWeight:"400"}}>Price</Typography>
              <Typography variant="h6">96000</Typography>
            </PriceSection>
            <PriceSection>
              <Typography variant="h6" style={{marginRight:'auto',fontSize: "1.05rem",fontWeight:"400"}}>Discount</Typography>
              <Typography variant="h6" style={{color:"#6AAA6D"}}>-96000</Typography>
            </PriceSection>
            <PriceSection>
              <Typography variant="h6" style={{marginRight:'auto',fontSize: "1.05rem",fontWeight:"400"}}>Delivery Charge</Typography>
              <Typography variant="h6">49</Typography>
            </PriceSection>
            <hr />
            <PriceSection>
              <Typography variant="h6" style={{marginRight:'auto',fontSize: "1.05rem",fontWeight:"600"}}>Total</Typography>
              <Typography variant="h6" style={{fontWeight:"600"}}>100000</Typography>
            </PriceSection>
          </div>
        </Grid>
      </Grid>
      <Grid item md={12} padding={5} justifyItems={"flex-end"}>
        <Button
          size="large"
          variant={"contained"}
          style={{ backgroundColor: "#FB641B" }}
        >
          Place Order
        </Button>
      </Grid>
    </Container>
  );
};

const ContainerStyle = {
  backgroundColor: "#FFFFFF",
};
const PriceSection = styled.div`
  display: flex;
`;
export default Cartproduct;
