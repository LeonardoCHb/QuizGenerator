import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(5),
    padding: theme.spacing(1),
    backgroundColor: "#E5E5E5",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));
