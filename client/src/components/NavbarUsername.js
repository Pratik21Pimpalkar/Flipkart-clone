import { Button, Fade, Menu, MenuItem } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../Context';
import { styled } from '@mui/system';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Userbutton = styled(Button)({
  textTransform: "capitalize",
  backgroundColor: "#2874F0 !important",
  color: "white !important",
  cursor: "pointer",
  height: "2rem",
  width: "7.5rem",
  border: "none",
  fontWeight: 600,
  fontSize: "1rem",

})

const MenuStyled = styled(Menu)({
  position: "absolute",
  top: "0.1rem",
  left: "1rem",
})
const NavbarUsername = ({ Username }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [account, setAccount] = useContext(UserContext);
  const handleLogout = () => {
    setAccount("");
    handleClose();
  }
  return (

    <div>
      <Userbutton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {Username}
      </Userbutton>
      <MenuStyled
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleLogout}><PowerSettingsNewIcon style={{ fill: "rgb(40, 116, 240)" }} />Logout</MenuItem>
      </MenuStyled>
    </div>
  );
}

export default NavbarUsername