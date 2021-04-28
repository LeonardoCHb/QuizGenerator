import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    height: 200,
    padding: theme.spacing(1),
    textAlign: "center",
  },
  CreatePaper: {
    height: 200,
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    textAlign: "center",
    fontSize: 20,
    fontSizeAdjust: 36,
  },
  PlusButton: {
    color: green.A400,
    fontSize: 115,
    height: 130,
  },
  BottomButton: {
    color: green.A400,
  },
}));
