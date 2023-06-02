import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { getToken, getUser } from '../../redux/auth/authSlice';
import { UserMenu } from '../UserMenu/UserMenu';

// const pages = ['register', 'login', 'contacts'];
const publicPages = ['register', 'login'];
const privatePages = ['contacts'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function ResponsiveAppBar() {
  const token = useAppSelector(getToken);
  const user = useAppSelector(getUser);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              className="mobile-menu"
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
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to={`/`}>Home</NavLink>
                </Typography>
              </MenuItem>
              {publicPages.map(page =>
                !token ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink to={`/${page}`}>{page}</NavLink>
                    </Typography>
                  </MenuItem>
                ) : null
              )}
              {privatePages.map(page =>
                token ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink to={`/${page}`}>{page}</NavLink>
                    </Typography>
                  </MenuItem>
                ) : null
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              className="menu-button"
              variant="contained"
              color="info"
              // sx={{
              //   my: 2,
              //   color: 'white',
              //   display: 'block',
              // }}
            >
              <NavLink to={`/`}>Home</NavLink>
            </Button>
            {publicPages.map(page =>
              !token ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="menu-button"
                  variant="contained"
                  color="info"
                  sx={{
                    my: 2,

                    display: 'block',
                    margin: 'auto',
                  }}
                >
                  <NavLink to={`/${page}`}>{page}</NavLink>
                </Button>
              ) : null
            )}
            {privatePages.map(page =>
              token ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="menu-button"
                  variant="contained"
                  color="info"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to={`/${page}`}>{page}</NavLink>
                </Button>
              ) : null
            )}
          </Box>
          {token ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip className="avatar" title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#bdbdbd',
                    p: 0,
                    marginTop: '0',
                  }}
                >
                  {user.name ? (
                    <Avatar
                      alt={`${user.name}`}
                      src="/static/images/avatar/2.jpg"
                    />
                  ) : null}
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
                <UserMenu handleCloseUserMenu={handleCloseUserMenu} />

                {/* {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
// export default ResponsiveAppBar;
