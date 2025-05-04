import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;