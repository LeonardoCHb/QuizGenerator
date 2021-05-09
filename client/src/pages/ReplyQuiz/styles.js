import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
    // display: inline-block,
    // border-radius: 4px,
    // background-color: #f4511e,
    // border: none,
    // color: #FFFFFF,
    // text-align: center,
    // font-size: 28px,
    // padding: 20px,
    // width: 200px,
    // transition: all 0.5s,
    // cursor: pointer,
    // margin: 5px,
  },
  // style for font size
  resize: {
    fontSize: 30,
  },
}));
