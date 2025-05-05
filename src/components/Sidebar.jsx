import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Menu as MenuIcon } from '@mui/icons-material';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ drawerWidth }) => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)'); // Media query for mobile view

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'Education', icon: <SchoolIcon />, link: '/education' },
    { text: 'Projects', icon: <WorkIcon />, link: '/projects' },
    { text: 'Contact', icon: <ContactMailIcon />, link: '/contact' },
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
          className="sidebar-menu-btn" // Add this class for the menu button
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer Component */}
      <div className={`sidebar ${isMobile ? (open ? 'open' : 'mobile') : ''}`}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.link}
              className="list-item" // Add this class for styling
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default Sidebar;
