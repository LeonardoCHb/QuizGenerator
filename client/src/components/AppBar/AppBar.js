// estilização
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
// react
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

// estilos internos
import styles from "./styles.js";

const useStyles = styles;

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    // em construcao
    // const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.heading + " " + classes.title}
            variant="h6"
            noWrap
          >
            Quiz Generator
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          {user ? (
            <div className={classes.profile}>
              {/* <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                <Avatar
                  alt="My robohash"
                  src={`https://robohash.org/${user?.result._id}`}
                />
              </Avatar> */}
              <div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className={classes.Menu}
                  onClick={handleClick}
                >
                  <Avatar
                    alt="My robohash"
                    src={`https://robohash.org/${user?.result._id}`}
                  />
                  <Typography className={classes.userName} variant="h6">
                    {user?.result.name}
                  </Typography>
                </Button>
                <Menu
                  id="simple-menu"
                  className={classes.MenuItem}
                  anchorEl={anchorEl}
                  keepMounted
                  variant="outilined"
                  elevation="1"
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={logout}>Sair</MenuItem>
                </Menu>
              </div>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
