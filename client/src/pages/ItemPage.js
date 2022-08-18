import React, { useEffect } from "react";
import styled from "styled-components";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DiscountIcon from "@mui/icons-material/Discount";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/actions/productActions";
import { addProductToCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const ItemPage = () => {

  const dispatch = useDispatch();
  const { product } = useSelector(state => state.productDetails)
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [id]);

  const addToCart=()=>{
    dispatch(addProductToCart(id))
  }
  return (<>
    {product ? <ProductWrapper>

      <ImgDiv>
        <div className="productBox">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="buy-cart">
          <button onClick={addToCart}>
            <span>
              <ShoppingCartIcon />
            </span>
            Add to Cart
          </button>
          <button>
            <span>
              <FlashOnIcon />
            </span>
            Buy Now
          </button>
        </div>
      </ImgDiv>
      <Details>
        <div className="head">
          <h3>
            {product.title}
          </h3>
        </div>
        <div className="ratingdiv">
          <div className="rating">
            <p>{product.rating}</p>
            <StarRateIcon />
          </div>
          <p className="review">({product.review})</p>
        </div>
        <div className="pricediv">
          <span className="price">₹{product.price}</span>
          <span className="mrp">₹{product.mrp}</span>
        </div>
        <div className="coupons">
          <h4>Coupons for you</h4>
          <ul>
            <li>
              <span>
                <DiscountIcon />
              </span>
              <strong>Special Price</strong> Get extra 30% off upto ₹50 on 1
              item(s) (price inclusive of discount) <p>T&C</p>
            </li>
            <h4>Available offers</h4>
            <li>
              <span>
                <DiscountIcon />
              </span>
              <strong> Bank Offer</strong> 10% off on ICICI Bank Credit Cards,
              up to ₹1250. On orders of ₹5000 and above <p>T&C</p>
            </li>
            <li>
              <span>
                <DiscountIcon />
              </span>
              <strong> Bank Offer</strong> Additional Flat ₹250 off on ICICI
              Bank Credit EMI transactions <p>T&C</p>
            </li>
            <li>
              <span>
                <DiscountIcon />
              </span>
              <strong>Bank Offer</strong> 5% Cashback on Flipkart Axis Bank Card{" "}
              <p>T&C</p>
            </li>
          </ul>
        </div>
      </Details>
    </ProductWrapper> : <div />}
  </>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  background-color: white;
  /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
  margin: 0 4.8rem;
`;
const ImgDiv = styled.div`
  display: flex;
  /* width: -webkit-fill-available; */
  width: auto;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  .productBox {
    margin-top: 1.4rem;
    padding: 3rem;
    border: 0.08rem solid #f1f3f6;
    height: 25rem;
    img {
      width: 100%;
      height: 100%;
          }
  }
  .buy-cart {
    margin-top: 2rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border: none;
      padding: 1rem 2rem;
      width: 14rem;
      min-width: fit-content;
      cursor: pointer;
      color: white;
      font-weight: 500;
      text-transform: uppercase !important;
    }
    button:nth-child(1) {
      margin-right: 1rem;
      background-color: #ff9f00;
    }
    button:nth-child(2) {
      background-color: #fb641b;
    }
  }
`;
const Details = styled.div`
padding: 0 2.6rem;
  .ratingdiv {
    display: flex;
    align-items: center;
    padding: 0.625rem;
    padding-bottom: 0;
    gap: 0.7rem;
    .review {
      color: #878787 !important;
      font-weight: 500;
    }
    .rating {
      width: fit-content;
      border-radius: 0.2rem;

      display: flex;
      background-color: #388e3c;
      font-weight: 500;
      color: white;
      align-items: center;
      font-size: 0.75rem;
      padding: 0.125rem 0.25rem;
      svg {
        font-size: 0.75rem;
      }
    }
  }
  .pricediv {
    padding: 0.625rem;
    padding-bottom: 0;
    .price {
      font-size: 1.75rem;
      color: #212121;
      font-weight: 600;
      padding: 0.313rem;
    }
    .mrp {
      font-weight: 450;
      font-size: 1rem;
      color: #878787;
      text-decoration: line-through;
      padding: 0.313rem;
    }
  }
  .head {
    h3 {
      margin-top: 2rem;
      font-weight: 500;
    }
  }
  .coupons {
    h4 {
      margin: 1rem 0;
    }
    ul {
      list-style: none;
      li {
        strong {
          padding: 0 0.3rem;
        }
        display: flex;
        align-items: center;
        span {
          color: #14be47;
          padding: 0.4rem;
        }
        p {
          padding-left: 0.5rem;
          color: #2874f0;
          font-weight: 500;
        }
      }
    }
  }
`;
export default ItemPage;
