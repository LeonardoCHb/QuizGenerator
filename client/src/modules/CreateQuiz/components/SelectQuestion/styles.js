import { green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green.A400,
    "&:hover": {
      backgroundColor: green.A400,
    },
  },
  fabRed: {
    color: theme.palette.common.white,
    backgroundColor: red.A700,
    "&:hover": {
      backgroundColor: red.A700,
    },
  },
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
