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

  const menuOptions = [
    // { label: "Home", path: "/" },
    // { label: "Favourites", path: "/teams/favourites" },
    // { label: "Dashboard", path: "/dashboard" },
    // { label: "Login", path: "/login" },

    { label: "React Firebase Login", path: "/" },
    { label: "Register", path: "/register" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Login", path: "/login" },
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
                // open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
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
              <nav className="navbar bg-base-200 text-base-content">
                <div className="navbar-middle">
                  {!user ? (
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                          : "btn btn-ghost mr-2 hidden lg:flex"
                      }
                    >
                      Home
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                          : "btn btn-ghost mr-2 hidden lg:flex"
                      }
                    >
                      Dashboard
                    </NavLink>
                  )}
                </div>
                {!user ? (
                  <div>
                    <Link to="/login">
                      <a>Login</a>
                    </Link>
                    <Link to="/register">
                      <a>Register</a>
                    </Link>
                    </div>
                ) : (
                  <div className="navbar-end">
                    <Link to="/logout">
                      <a>Log Out</a>
                    </Link>
                  </div>
                )}
              </nav>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
