import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(1),
    backgroundColor: "#003049",
    borderBottomRightRadius: "40px",
    borderBottomLeftRadius: "40px",
    marginTop: "0",
    marginLeft: "10rem",
    marginRight: "10rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  grow: {
    flexGrow: 1,
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
