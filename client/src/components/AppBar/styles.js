import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  userName: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    color: "inherit",
    textDecoration: "none",
    marginRight: 0,
    marginLeft: 0,
    textAlign: "center",
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    "& > *": {
      display: "flex",
      margin: 0,
      background: "#014f86",
      boxShadow: 0,
    },
    width: "100%",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    marginRight: 0,
    marginLeft: 0,
  },
}));
