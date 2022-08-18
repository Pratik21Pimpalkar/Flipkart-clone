import React, { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import NavTabs from "./NavTabs";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import { styled as stl } from '@mui/material/styles';
import { UserContext } from "../Context";
import { Badge } from "@mui/material";
import NavbarUsername from "./NavbarUsername";
import Search from "./Search";
import { useSelector } from "react-redux";


const Navbar = () => {
  const [account, setAccount] = useContext(UserContext);
  const cartLength= useSelector(state=>state.cart.cartProduct)
  const StyledBadge = stl(Badge)({
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "#f95050"
    }
  });
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const [search,setSearch]= useState("")

  return (
    <>
      <Navwrapper>
        <div className="navwrap">
        <Link to="/">
          <div id="logo">
            <img src={logo} alt="flipkart-logo" />
          </div>
        </Link>
        {/* <div id="search">
          <input
            type="text"
            placeholder="Search for products,brands and more"
            onChange={(e)=>{setSearch(e.target.value)}}
          />
          <div>
            <SearchIcon />
          </div>
        </div> */}
        <Search/>
        {
          account ?
            <NavbarUsername Username={account} /> :
            <div id="login" >
              <button onClick={handleOpen}>Login</button>
            </div>
        }
        <div id="Seller">
          <button>Become a Seller</button>
        </div>
        <div id="more">
          <button>More</button>
        </div>
        <div id="cart">
          <NavLink style={{ textDecoration: "none" }} to={"/cart"}>
            <div>
              <StyledBadge badgeContent={cartLength.length} display={cartLength.length>0? "block" :"none"}>
                <ShoppingCartIcon />
              </StyledBadge>
              <button>Cart</button></div>
          </NavLink>
        </div>
        </div>
      </Navwrapper>
      <NavTabs />
      <Login handleOpen={handleOpen} open={open} setOpen={setOpen} />

    </>
  );
};

const Navwrapper = styled.nav`
.navwrap{
  position: sticky;
  margin: 0;
  padding: 0;
  z-index: 1000;
  width: 100%;
  background-color: #2874f0;
  display: flex;
  justify-content: center;
  min-height: 3.5rem;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 8px rgb(0 0 0 / 80%);
}
background-color: #2874f0;
  /* position: sticky;
  margin: 0;
  padding: 0;
  z-index: 1000;
  width: 100%;
  background-color: #2874f0;
  display: flex;
  justify-content: center;
  min-height: 3.5rem;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 8px rgb(0 0 0 / 80%); */
  #logo {
    img {
      width: 4.68rem;
    }
  }
  #search {
    background-color: white;
    height: 2.25rem;
    width: 33rem;
    display: flex;
    padding: 0 0.2rem;
    align-items: center;
    border-radius: 0.2rem;
    input {
      height: 100%;
      flex: 1;
      outline: none;
      border: none;
      padding: 0.7rem 0.4rem;
      border-radius: 0.2rem;
    }
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        fill: #2874f0;
      }
    }
  }
  #login {
    button {
      cursor: pointer;
      height: 2rem;
      width: 7.5rem;
      border: none;
      background-color: white;
      font-weight: 600;
      font-size: 1rem;
      color: #2874f0;
    }
  }
  #more,
  #Seller {
    button {
      margin-right: 0.5rem;
      cursor: pointer;
      background-color: #2874f0;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: white;
    }
  }
  #cart {
    display: flex;
    gap: 0.2rem;
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        fill: white;
      }
    }
    button {
      background-color: #2874f0;
      cursor: pointer;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: white;
    }
  }

  @media screen  and (max-width : 450px){
    .navwrap{
      box-shadow: none;

      transform: scale(0.971);
    }
  }
`;
export default Navbar;
