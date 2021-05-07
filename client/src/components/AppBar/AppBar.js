// estilização
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import decode from "jwt-decode";
// react
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

// componente menu de perfil do usuario (menu a direita da app bar)
import DropMenu from "./Menu";
// estilos internos
import styles from "./styles.js";

const useStyles = styles;

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className={classes.grow}>
      <AppBar color="transparent" position="static" className={classes.root}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.heading + " " + classes.userName}
            variant="h6"
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
            <DropMenu user={user} Logout={logout} />
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="rgba(0, 0, 255, 0.3)"
            >
              Entrar
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
