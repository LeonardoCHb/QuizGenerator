import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  DataCard: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(4),
    textAlign: "center",
    width: "95%",
    height: "10.5rem",
    boxShadow:
      "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
  },
  cardActions: {
    flex: 1,
    justifyContent: "center",
  },
}));
