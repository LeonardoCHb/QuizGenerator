import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    boxShadow:
      "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
  },
  details: {
    justifyContent: "space-between",
    margin: "20px",
  },
  cardActions: {
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
}));
