import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(1),
    backgroundColor: "#003049",
    borderBottomRightRadius: "30px",
    borderBottomLeftRadius: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  grow: {
    flexGrow: 1,
  },
}));
