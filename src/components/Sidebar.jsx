import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Menu as MenuIcon } from '@mui/icons-material';

const Sidebar = ({ drawerWidth }) => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)'); // Media query for mobile view

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Education', icon: <SchoolIcon /> },
    { text: 'Projects', icon: <WorkIcon /> },
    { text: 'Contact', icon: <ContactMailIcon /> },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open); // Toggle sidebar on mobile
  };

  return (
    <>
      {isMobile && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginLeft: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={handleDrawerToggle}
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            mt: '64px', // Offset for AppBar
          },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
