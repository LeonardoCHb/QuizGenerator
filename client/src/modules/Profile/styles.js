import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  ProfileContainer: {
    display: "flex",
  },
  AvatarContainer: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: "auto",
    padding: 0,
  },
  AvatarPaper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    width: 250,
    display: "flex",
  },
  AvatarImage: {
    width: theme.spacing(15),
    marginBottom: theme.spacing(3),
    height: theme.spacing(15),
  },
  AvatarContainerInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  QuizPaper: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    flex: 1,
    alignItems: "center",
  },
  QuizContainer: {
    flex: 1,
    marginTop: theme.spacing(3),
    padding: 0,
  },
}));
