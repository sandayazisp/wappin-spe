import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

type Anchor = 'right';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 230}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Product', 'Features', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={`#${text.toLowerCase()}`}>
              <ListItemIcon>
              {index === 0 && <HomeIcon sx={{color: 'common.white'}} />}
              {index === 1 && <ProductionQuantityLimitsIcon sx={{color: 'common.white'}} />}
              {index === 2 && <AssessmentIcon sx={{color: 'common.white'}} />}
              {index === 3 && <ContactsIcon sx={{color: 'common.white'}} />} 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{backgroundColor: 'common.white'}} />
      <List
      >
        {['Register', 'Login'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={`{text}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleIcon sx={{color: 'common.white'}} /> : <LoginIcon sx={{color: 'common.white'}} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
    
    >
      <IconButton onClick={toggleDrawer('right', true)}
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        
      >
        <Box
        sx={{
          backgroundColor: 'common.black',
          height: '100%',
          color: 'common.white',
        }}
        >
          {list('right')}

        </Box>
      </Drawer>
    </Box>
  );
}