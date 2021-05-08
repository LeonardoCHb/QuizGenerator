import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    display: "inline-block",
  },
  quizzes: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(15),
    marginBottom: theme.spacing(4),
    height: theme.spacing(15),
  },
  containerProfile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
}));
