import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import CartWidget from './CartWidget';
import { Link, useNavigate } from 'react-router-dom';


const pages = ['Popular', 'Top rated', 'Upcoming',];
const settings = ['Register', 'Sign up', 'Contact'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar position="fixed" sx={{opacity: "90%", backdropFilter: "blur(10px)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{                                                                                             
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 900,
              textTransform: 'uppercase',
              flexGrow: 1,
              padding: 0,
            }}
          >
            <Button onClick={()=>navigate('./categoria/Now Playing')} sx={{color: "red", fontSize: "1.3rem", letterSpacing: ".25rem", fontWeight: "bold"}}>inventflix</Button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, 
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to={`/categoria/${page}`} className="botonesNav">{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: .7,
              fontFamily: 'roboto',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textTransform: 'uppercase',
              textAlign: "center",
            }}
          >
            <Button onClick={()=>navigate('./categoria/Now Playing')} sx={{color: "red", fontSize: "1.3rem", letterSpacing: ".25rem", margin: 0}}>invtflx</Button>
          </Typography>
          <Box sx={{ flexGrow: 1.1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: 'flex', margin: "1rem", fontFamily: 'roboto',}}
              >
                <Link to={`/categoria/${page}`} className="botonesNav">{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display:'flex'}}>
          
              <Box  sx={{margin: "1rem"}}>
                  <Button sx={{color:"whitesmoke"}} onClick={()=>navigate('./cart')}><CartWidget/></Button>
              </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "whitesmoke"}}>
                <LogoutIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

