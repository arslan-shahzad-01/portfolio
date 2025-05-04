import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />

      <Sidebar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          mt: '64px',
          p: 3,
          minHeight: 'calc(100vh - 128px)', // Ensure content area takes full height minus header and footer
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
