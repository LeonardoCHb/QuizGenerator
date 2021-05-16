// estilização
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import decode from "jwt-decode";
// react e redux
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

// componentes e actions
import { QUIZ_SEARCH } from "../../constants/actionTypes.js";
import DropMenu from "./Menu/Menu";
import SearchBox from "./SearchBox/SearchBox";
// estilos internos
import styles from "./styles.js";

const useStyles = styles;

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const url = window.location.href;
  const home = `${process.env.REACT_APP_SITE_URL}/`;

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    history.go(0);
    setUser(null);
  };
  useEffect(() => {
    dispatch({ type: QUIZ_SEARCH, payload: filter });
  }, [filter]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography
          className={`${classes.heading} ${classes.userName}`}
          variant="h6"
        >
          <a className={classes.heading} href="/">
            <Typography variant="h5">Quiz Generator</Typography>
          </a>
        </Typography>
        {url === home ? (
          <SearchBox
            className={`${classes.cardActions}`}
            searchChange={setFilter}
          />
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <div className={classes.grow} />
        {user ? (
          <DropMenu user={user} Logout={logout} />
        ) : (
          <Button component={Link} to="/auth" variant="contained">
            Entrar
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
