import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: '10px 0',
        zIndex: theme.zIndex.drawer - 1, // Ensure it's below the drawer but above content
        boxShadow: '0px -2px 4px rgba(0,0,0,0.1)', // Subtle shadow for depth
        mt: 'auto', // Push to bottom when content is short
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {currentYear} Muhammad Arslan Shahzad. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;