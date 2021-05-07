import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    margin: 270,
    flexDirection: "column",
    // alignItems: "center",
    padding: theme.spacing(2),
    /* background: "linear-gradient(to bottom, #0099ff 5%, #99ccff 86%)", */
  },
  quizzes: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(60),
    marginRight: theme.spacing(60),
    /* background: "linear-gradient(to bottom, #66ccff 0%, #ffcccc 81%)", */
  },
}));