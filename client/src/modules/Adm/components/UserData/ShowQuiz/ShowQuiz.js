// estilização
import {
  AppBar,
  Container,
  Dialog,
  Grid,
  IconButton,
  Slide,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import CloseIcon from "@material-ui/icons/Close";
// bibliotecas
// eslint-disable-next-line no-unused-vars
import moment from "moment";
import "moment/locale/pt-br";
// react
import React, { useEffect } from "react";

import ShowResponse from "./components/ShowResponse/ShowResponse";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#014f86",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  subtitle: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  table: {
    position: "sticky",
    top: 0,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  { field: "id", headerName: "ID", width: "5rem" },
  { field: "name", headerName: "Nome", width: "15rem" },
  { field: "answeredAt", headerName: "Horário", width: "15rem" },
];

export default function ({ open, handleClose, responses, quiz }) {
  const classes = useStyles();
  const [response, setResponse] = React.useState(null);

  // eslint-disable-next-line no-unused-vars
  const [rows, setRows] = React.useState([]);

  const handleTable = (id) => {
    const res = responses.filter((response) => {
      return id === response._id;
    });
    setResponse(res[0]);
  };

  useEffect(() => {
    if (responses) {
      const parseResponses = responses.map((response, index) => {
        return {
          id: index,
          name: response.name,
          answeredAt: moment(response.answeredAt).format("DD/MM/YYYY HH:mm:ss"),
          responseId: response._id,
        };
      });
      setRows(parseResponses);
    }
  }, [responses]);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {`${quiz.title}`}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" style={{ display: "flex", flexWrap: "wrap" }}>
          <Grid item md={6}>
            <div className={classes.table}>
              <Typography variant="h6" className={classes.subtitle}>
                Usuários respondentes do quiz
              </Typography>
              <div style={{ height: "30rem", width: "35rem" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={7}
                  selectionModel={false}
                  disableColumnMenu={true}
                  disableColumnSelector={true}
                  disableColumnReorder={true}
                  disableMultipleSelection={true}
                  hideFooterRowCount
                  showCellRightBorder={true}
                  showColumnRightBorder={true}
                  hideFooterSelectedRowCount
                  onRowClick={(e) => {
                    handleTable(e.row.responseId);
                  }}
                />
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6" className={classes.subtitle}>
              Respostas
            </Typography>
            <ShowResponse response={response} quiz={quiz} />
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
}
