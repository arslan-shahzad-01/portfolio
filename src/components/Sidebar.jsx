import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  const menuItems = ['Home', 'Education', 'Projects', 'Contact'];

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menuItems.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;