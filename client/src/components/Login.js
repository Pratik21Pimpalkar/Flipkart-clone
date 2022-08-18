import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { UserContext } from "../Context/index";

const Login = ({ handleOpen, setOpen, open }) => {
  const [account, setAccount] = useContext(UserContext);
  const [userData, setUserdata] = useState({
    name: "", password: "", secret: "", email: ""
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${process.env.REACT_APP_API}login`, {
        name: userData.name, password: userData.password
      })
      setAccount({
        user: data.user,
        token: data.token
      })
      window.localStorage.setItem('auth', JSON.stringify(data))
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginInput = (e) => {
    setUserdata({ ...userData, [e.target.name]: e.target.value })
  }
  const handleSignUp = async () => {
    try {
      console.log(userData);
      const res = await axios.post(`${process.env.REACT_APP_API}signin`, userData)
      setAccount(userData.name)
      setOpen(false)
    } catch (error) {
      console.log(error);
    }
  }
  const [toggle, setToggle] = useState(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {toggle ? (
          <Box sx={style}>
            <LoginBox>
              <Bluepart>
                <h3>Login</h3>
                <p>Get access to your</p>
                <p>Orders, Wishlist and</p>
                <p>Recommendations</p>
              </Bluepart>
              <Desc>
                <TextField
                  id="standard-basic"
                  label="Enter Email"
                  name='email'
                  onChange={handleLoginInput}
                  variant="standard"
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Enter Password"
                  onChange={handleLoginInput}
                  name='password'
                  variant="standard"
                  required
                />
                <p>
                  By continuing, you agree to Flipkart's{" "}
                  <span>Terms of Use </span> and <span>Privacy Policy.</span>
                </p>
                <button onClick={handleLogin}>Login</button>
                <Typography
                  variant="h6"
                  style={{
                    position: "absolute",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    bottom: "1rem",
                    color: "#2874f0",
                  }}
                  onClick={() => setToggle(!toggle)}
                >
                  New to Flipkart? Create an account
                </Typography>
              </Desc>
            </LoginBox>
          </Box>
        ) : (
          <Box sx={style}>
            <LoginBox>
              <Bluepart>
                <h3>Looks like your're new here!</h3>
                <p>Sign up with your </p>
                <p>email to get started.</p>
              </Bluepart>
              <Desc>
                <TextField
                  id="standard-basic"
                  label="Enter Full Name"
                  onChange={handleLoginInput}
                  name="name"
                  variant="standard"
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Enter Email"
                  onChange={handleLoginInput}
                  name="email"
                  variant="standard"
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Enter Password"
                  onChange={handleLoginInput}
                  name="password"
                  variant="standard"
                  required
                />
                <TextField
                  onChange={handleLoginInput}
                  id="standard-basic"
                  label="Enter Secret Password"
                  name="secret"
                  placeholder="Enter your favorite color"
                  variant="standard"
                  required
                />
                <p>
                  By continuing, you agree to Flipkart's{" "}
                  <span>Terms of Use </span> and <span>Privacy Policy.</span>
                </p>
                <button onClick={handleSignUp}>Sign up</button>
                <Typography
                  variant="h6"
                  style={{
                    position: "absolute",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    bottom: "1rem",
                    cursor: "pointer",
                    color: "#2874f0",
                  }}
                  onClick={() => setToggle(!toggle)}
                >
                  Existing User? Login
                </Typography>
              </Desc>
            </LoginBox>
          </Box>
        )}
      </Modal>
    </>
  );
};

const LoginBox = styled.div`
  position: relative;
  z-index: 900;
  background-color: white;
  height: 32rem;
  width: 45rem;
  border-radius: 0.2rem;
  display: flex;
  @media screen and (max-width: 450px){
    height: 38rem;
  }
`;
const Bluepart = styled.div`
  background-color: #2874f0;
  height: 100%;
  width: 35%;
  padding: 2rem;

  h3 {
    color: white;
    font-weight: 500;
    line-height: 2.5rem;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  p {
    color: white;
    font-weight: 500;
    line-height: 1.8rem;
    font-size: 1.125rem;
  }
`;
const Desc = styled.div`
  flex: 1;
  padding: 2rem;
  .MuiTextField-root {
    width: 100%;
    margin-bottom: 2rem;
  }
  p {
    font-size: 0.8rem;
    color: #878787;
    span {
      color: #2874f0;
    }
  }
  button {
    position: relative;
    top: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border: none;
    padding: 1rem 2rem;
    width: 100%;
    min-width: fit-content;
    cursor: pointer;
    color: white;
    font-weight: 500;
    text-transform: uppercase !important;
    background-color: #fb641b;
  }
  
`;
export default Login;
