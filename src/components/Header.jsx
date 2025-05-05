import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar className="toolbar">
        <Typography variant="h6" noWrap component="div" className="typography">
          Muhammad Arslan Shahzad
        </Typography>

        <Box>
          <IconButton onClick={handleAvatarClick} className="iconButton">
            <Avatar alt="Profile" src="/static/images/avatar/1.jpg" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            className="menu"
          >
            <MenuItem className="menuItem">Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
