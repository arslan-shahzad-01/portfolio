import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '10px 0',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" component="div">
        © 2025 My Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;