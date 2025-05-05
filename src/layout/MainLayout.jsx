import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { usePageTitle } from '../contexts/PageTitleContext';

const MainLayout = ({ children }) => {
  const drawerWidth = 240;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pageTitle } = usePageTitle();
  
  // State for mobile drawer (open/closed)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onMenuClick={handleDrawerToggle} pageTitle={pageTitle} />

      <Sidebar 
        drawerWidth={drawerWidth} 
        mobileOpen={mobileOpen} 
        onClose={handleDrawerToggle}
        isMobile={isMobile}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          ml: isMobile ? 0 : `${drawerWidth}px`,
          mt: '64px',
          p: 3,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Box sx={{ mb: 2 }}>
          {/* Optional: Display page title here if you want it in the main content area as well */}
        </Box>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;