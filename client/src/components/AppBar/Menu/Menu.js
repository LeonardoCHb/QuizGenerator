// estilização
import {
  Avatar,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  makeStyles,
  Typography,
} from "@material-ui/core";
// React
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { findAdm } from "../../../actions/adm";

const useStyles = makeStyles((theme) => ({
  userName: {
    color: "white",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  avatar: {
    marginLeft: "1rem",
  },
  menu: {
    width: "10rem",
    justifyContent: "center",
    position: "left",
  },
  logout: {
    "&:hover": { background: "gray" },
  },
}));

export default function MenuListComposition({ user, Logout, adm }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.findAdm);
  const [userId, setUserId] = React.useState("");

  useEffect(() => {
    dispatch(findAdm());
  }, []);

  useEffect(() => {
    if (user) {
      const isCustomAuth = user?.token.length < 500;
      if (isCustomAuth) setUserId(user?.result?._id);
      else setUserId(user?.result?.googleId);
    }
  }, [user]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Typography className={classes.userName} variant="h6">
            {user?.result.name}
          </Typography>
          <Avatar
            className={classes.avatar}
            alt={user?.result.name ? user?.result.name : "My robohash"}
            src={
              user?.result.imageUrl
                ? user?.result.imageUrl
                : `https://robohash.org/${user?.result._id}`
            }
          />
        </Button>
        <Popper
          transition
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="top-end"
          disablePortal={false}
          modifiers={{
            flip: {
              enabled: true,
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: "scrollParent",
            },
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "center" ? "right top" : "right top",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      className={classes.menu}
                      component={Link}
                      to="/profile"
                    >
                      Perfil
                    </MenuItem>
                    {id === userId ? (
                      <MenuItem
                        className={classes.menu}
                        component={Link}
                        to="/adm"
                      >
                        Adm
                      </MenuItem>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}

                    <MenuItem
                      className={classes.menu + " " + classes.logout}
                      onClick={Logout}
                    >
                      Sair
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
