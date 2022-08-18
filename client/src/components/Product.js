import React, { useEffect } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Product = ({ Heading, product}) => {

  return (
    <>
      <DealBar>
        <h1 style={{textTransform:"capitalize",fontSize:" 1.5rem"}}>{Heading}</h1>
        <div id="viewall">
          <button>VIEW ALL</button>
        </div>
      </DealBar>
      <ProductBar>
        <Carousel responsive={responsive} infinite={true} centerMode={false}>
          
          { product ?
          product.map((item, id) => (
            <Link key={id} to={`/product/${item.id}`} style={{ textDecoration: "none", color: "black" }}   >
            <div className="item_carousel">
              <div className=" item_Pic">
              <img src={item.img}  alt="" />
              </div>
              <p className="desp">
                {item.title} <br />
              </p>
              <div className="ratingdiv">
                <div className="rating">
                  <p>{item.rating}</p>
                  <StarRateIcon />
                </div>
                <p className="review">({item.review})</p>
              </div>
              <div className="pricediv">
                <span className="price">₹{item.price}</span>
                <span className="mrp">₹{item.mrp}</span>
              </div>
            </div>
             </Link>
          )):<div/>}
        </Carousel>
      </ProductBar>
    </>
  );
};

const DealBar = styled.div`
  background-color: white;
  margin: 0.5rem;
  display: flex;
  
  align-items: center;
  padding: 0 0.7rem;
  height: 4rem;
  margin-bottom: 0.07rem;
  border-bottom: #f1f3f6 0.07rem solid;
  h1 {
    margin-left:2rem;
    flex: 1;
  }
  #viewall {
    button {
      background-color: #2874f0;
      padding: 0.625rem 1.25rem;
      border: none;
      font-weight: 600;
      border-radius: 0.1rem;
      color: white;
    }
  }
`;

const ProductBar = styled.div`
  margin: 0.5rem;
  margin-top: 0;
  background-color: white;

  .item_carousel {
    padding: 0.5rem;
    cursor: pointer;
    
    margin-bottom: 1.25rem;
    .item_Pic {
      width: 80%;
      height: 10rem;
      left: 0.9rem;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    position: relative;
      transition: all 0.7s ease;
      &:hover {
        transform: scale(1.06);
      }
    }
    .desp {
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      /* text-overflow: ellipsis;
    text-decoration: none;
    white-space: nowrap; */
      line-clamp: 2;
      padding: 0.625rem;
      padding-bottom: 0;
      margin-bottom: 0;
    }
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
        color: #212121;
        font-weight: 600;
        padding: 0.313rem;
      }
      .mrp {
        font-weight: 450;
        font-size: 0.875rem;
        color: #878787;
        text-decoration: line-through;
        padding: 0.313rem;
      }
    }
  }
`;
export default Product;
