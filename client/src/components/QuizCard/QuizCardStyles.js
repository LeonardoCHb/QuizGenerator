import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 170,
  },
  text: {
    height: "80%",
    // overflow: "auto",
  },
  CreateButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  BottomButton: {
    color: green.A400,
    flex: 1,
  },
  ContainerHolder: {},
}));
