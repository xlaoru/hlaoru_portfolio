import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'

import hlaoruLogo from '../../media/hlaoru_logo.jpg'

const drawerWidth = 240;
const navItems = [
  {title: 'Home', link: '#home'},
  {title: 'About', link: '#about'},
  {title: 'Projects', link: '#projects'},
  {title: 'Contact', link: '#contact'},
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Divider />
      <List sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{p: 0, m: 0}}>
            <ListItemButton sx={{display: 'flex', justifyContent: 'center', pl: 0}}>
              <a style={{'color': '#1e1e1e', 'textDecoration': 'none'}} href={item.link}><ListItemText sx={{color: '#1e1e1e'}} /><h3>{item.title}</h3></a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}} style={{'minHeight': '50px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            </IconButton>
            <Avatar alt="hlaoru_logo" src={hlaoruLogo} sx={{boxShadow: '0px 0px 5px 0px rgba(30,30,30,1)'}} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item, index) => (
                <Button key={index} sx={{color: '#1e1e1e', fontWeight: 'bold'}}>
                  <a style={{'color': '#1e1e1e', 'textDecoration': 'none'}} href={item.link}>{item.title}</a>
                </Button>
                ))}
            </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: 'auto', borderRadius: '0 15px 15px 15px' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header