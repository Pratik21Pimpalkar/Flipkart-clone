import { Typography } from '@mui/material'
import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const CartProductPrice = () => {
    const items = useSelector(state=>state.cart.cartProduct)

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const calculateTotalPrice = () => {
        let amt = 0, dis = 0
        if (items.length > 0) {
            items.map(item => {
                amt += parseFloat(item.price.replace(/,/g, ''));
                dis += parseFloat(item.mrp.replace(/,/g, '')) - parseFloat(item.price.replace(/,/g, ''))
            })
        }
        setPrice(amt);
        setDiscount(dis)
    }
    useEffect(() => {
        calculateTotalPrice();
    }, [items])
    return (
        <>
            {items.length > 0 ?
                <div>
                    <Typography variant="h5" style={{ borderBottom: "1px solid #121212" }}>Price Details</Typography>
                    <div style={{ marginTop: "2rem" }}>
                        <PriceSection>
                            <Typography variant="h6" style={{ marginRight: 'auto', fontSize: "1.05rem", fontWeight: "400" }}>Price</Typography>
                            <Typography variant="h6">₹{price}</Typography>
                        </PriceSection>
                        <PriceSection>
                            <Typography variant="h6" style={{ marginRight: 'auto', fontSize: "1.05rem", fontWeight: "400" }}>Discount</Typography>
                            <Typography variant="h6" style={{ color: "#6AAA6D" }}>-₹{discount}</Typography>
                        </PriceSection>
                        <PriceSection>
                            <Typography variant="h6" style={{ marginRight: 'auto', fontSize: "1.05rem", fontWeight: "400" }}>Delivery Charge</Typography>
                            <Typography variant="h6">₹40</Typography>
                        </PriceSection>
                        <hr />
                        <PriceSection>
                            <Typography variant="h6" style={{ marginRight: 'auto', fontSize: "1.05rem", fontWeight: "600" }}>Total</Typography>
                            <Typography variant="h6" style={{ fontWeight: "600" }}>₹{price + 40}</Typography>
                        </PriceSection>
                    </div>
                </div> : <div />}
        </>
    )
}
const PriceSection = styled.div`
  display: flex;
`;
export default CartProductPrice