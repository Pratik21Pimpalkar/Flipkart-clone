import React from "react";
import styled from "styled-components";
import axios from 'axios'
import { Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";

const SignUp = ({ handleOpen, setOpen, open }) => {
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
                variant="standard"
                required
              />
              <TextField
                id="standard-basic"
                label="Enter Email"
                variant="standard"
                required
              />
              <TextField
                id="standard-basic"
                label="Enter Password"
                variant="standard"
                required
              />
              <TextField
                id="standard-basic"
                label="Enter Secret Password"
                placeholder="Enter your favorite color"
                variant="standard"
                required
              />
              <p>
                By continuing, you agree to Flipkart's{" "}
                <span>Terms of Use </span> and <span>Privacy Policy.</span>
              </p>
              <button>Login</button>
            </Desc>
          </LoginBox>
        </Box>
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
`;
const Bluepart = styled.div`
  background-color: #2874f0;
  height: 100%;
  width: 35%;
  padding: 2rem;

  h3 {
    color: white;
    font-weight: 500;
    font-size: 1.75rem;
    margin-bottom: 1rem;
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
export default SignUp;
