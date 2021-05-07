import { fade, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  userName: {
    display: "flex",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  heading: {
    color: "inherit",
    textDecoration: "none",
    marginRight: "3rem",
    marginLeft: "1rem",
    textAlign: "center",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  Menu: {
    position: "absolute",
    right: "0.9rem",
    top: "0.3rem",
    color: fade(theme.palette.common.white, 1),
    boxShadow: "0 1px 2px 1px rgba(0, 0, 0, .3)",
  },
  MenuItem: {
    backgroundColor: fade(theme.palette.primary.dark, 0.1),
    boxShadow: "0 1px 2px 1px rgba(0, 0, 0, .3)",
  },
  " @media (max-width: 900px)": {
    paddingLeft: 0,
  },
  root: {
    "& > *": {
      display: "flex",
      margin: 0,
      padding: 5,
      border: 0,
      background: "transparent",
      boxShadow: "none",
    },
  },
}));
