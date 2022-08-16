import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  inactiveLink: {
    color: "white",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
  },
  activeLink: {
    color: "black",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
    background: "#bfbfbf",
  },
}));

function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Home", path: "/", protected: false },
    { label: "Login", path: "/login", protected: false },
    { label: "Register", path: "/register", protected: false },
    { label: "Dashboard", path: "/dashboard", protected: true },
    { label: "Logout", path: "/logout", protected: true },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        className={classes.appbar}
        position="fixed"
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            The Football App
          </Typography>
          <Typography variant="h6" className={classes.title}>
            All you ever wanted to know about Football!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions
                  .filter((opt) => (user ? opt.protected : !opt.protected))
                  .map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions
                .filter((opt) => (user ? opt.protected : !opt.protected))
                .map((opt) => (
                  <NavLink
                    key={opt.label}
                    to={opt.path}
                    className={({ isActive }) =>
                      isActive ? classes.activeLink : classes.inactiveLink
                    }
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </NavLink>
                ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
