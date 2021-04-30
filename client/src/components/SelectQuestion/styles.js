import { green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    minHeight: 200,
  },
  ButtonsContainer: {
    flex: 1,
  },
  fabGreen: {
    flex: 1,
    color: theme.palette.common.white,
    backgroundColor: green.A400,
    "&:hover": {
      backgroundColor: green.A400,
    },
  },
  fabRed: {
    flex: 1,
    bottom: theme.spacing(0),
    right: -495,
    color: theme.palette.common.white,
    backgroundColor: red.A700,
    "&:hover": {
      backgroundColor: red.A700,
    },
  },
  RedButton: {
    flex: 1,
    margin: 20,
  },
}));
