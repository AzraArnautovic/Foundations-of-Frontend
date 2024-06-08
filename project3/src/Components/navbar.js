import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, styled } from '@mui/material/styles';

// Styled Link to use theme colors
const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.contrastText,
  },
}));

// Styled AppBar to align with the theme
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

// Styled Drawer to align with the theme
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#5c6bc0',
    color: theme.palette.primary.contrastText,
  },
}));

// Styled List to align with the theme
const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: '#5c6bc0',
}));

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/">Pet Rescue</StyledLink>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }} // Show on small screens only
          >
            <MenuIcon />
          </IconButton>
          
          <List sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ListItem button component={StyledLink} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={StyledLink} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={StyledLink} to="/posts">
              <ListItemText primary="Posts" />
            </ListItem>
            <ListItem button component={StyledLink} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={StyledLink} to="/adopt">
              <ListItemText primary="Adopt" />
            </ListItem>
          </List>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <StyledList>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/posts">
            <ListItemText primary="Posts" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={StyledLink} to="/adopt">
            <ListItemText primary="Adopt" />
          </ListItem>
        </StyledList>
      </StyledDrawer>
    </Box>
  );
};

export default Navbar;
