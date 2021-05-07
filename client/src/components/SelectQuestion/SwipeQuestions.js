/* eslint-disable no-unused-vars */
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Checkbox from "../TypeQuestions/Checkbox";
import Choice from "../TypeQuestions/Choice.js";
import Text from "../TypeQuestions/Text.js";
import styles from "./styles.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = styles;

const initialQuestion = {
  hasResponse: null,
  options: null,
  wording: null,
  response: null,
  typeQuestion: null,
};

export default function ({ handleQuestion }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [question, setQuestion] = useState({ ...initialQuestion });
  const [list, setList] = useState({});
  const [erase, setErase] = useState(false);
  const [editing, setEditing] = useState(false);
  const [questionToEdit, setQuestionToEdit] = useState(null);
  const [page, setPage] = useState(0);

  // Tipo de questão atual sendo feita
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setEditing(false);
  };

  // Envia questões para o quiz sendo criado
  const sendQuestions = async () => {
    await handleQuestion(list);
  };

  // Chama a função de enviar questões para o componente quiz a cada modificação
  useEffect(sendQuestions, [list]);

  // Apaga formulario de questão após enviada para a lista de questões
  const eraseQuestionForm = () => {
    setErase(!erase);
  };

  // Deletar questão
  const handleSubmitDelete = () => {
    const size = Object.keys(list).length;
    if (editing && size > 0) {
      const auxList = { ...list };
      const newList = {};
      console.log(auxList);
      delete auxList[questionToEdit.name];
      let index = 0;
      for (const question in auxList) {
        newList[`question${index}`] = auxList[question];
        index += 1;
      }
      setList({ ...newList });
      setEditing(false);
      eraseQuestionForm();
    }
  };

  // Envia questão editada para a lista de questões e sai do modo de edição
  const handleSubmitEdit = () => {
    setEditing(!editing);
    setList({ ...list, ...question });
    eraseQuestionForm();
  };

  // Envia questão para a lista de questões
  const handleSubmitAdd = () => {
    const size = Object.keys(list).length;
    if (size < 10) {
      const newQuestion = {};
      const key = Object.keys(list).length;
      newQuestion.hasResponse = question.hasResponse;
      newQuestion.options = question.options;
      newQuestion.wording = question.wording;
      newQuestion.response = question.response;
      newQuestion.typeQuestion = question.typeQuestion;
      const newQuestionObject = {};
      newQuestionObject[`question${key}`] = { ...newQuestion };
      setList({ ...list, ...newQuestionObject });
      setQuestion({ ...initialQuestion });
      eraseQuestionForm();
    }
  };

  // Questão atual que está sendo preenchida
  const questionChange = (
    wording,
    options,
    hasResponse,
    response,
    typeQuestion
  ) => {
    const newQuestion = { ...question };
    newQuestion.hasResponse = hasResponse;
    newQuestion.options = options;
    newQuestion.wording = wording;
    newQuestion.response = response;
    newQuestion.typeQuestion = typeQuestion;
    setQuestion({ ...newQuestion });
  };

  // Questão que está sendo editada
  const questionEditedChange = (
    name,
    wording,
    options,
    hasResponse,
    response,
    typeQuestion
  ) => {
    const newQuestion = {};
    newQuestion.hasResponse = hasResponse;
    newQuestion.options = options;
    newQuestion.wording = wording;
    newQuestion.response = response;
    newQuestion.typeQuestion = typeQuestion;
    const newQuestionObject = {};
    newQuestionObject[name] = { ...newQuestion };
    setQuestion({ ...newQuestionObject });
  };

  // Ativa modo de edição da questão
  const editingQuestion = (questionToEdit, nameQuestion) => {
    setEditing(!editing);
    setQuestionToEdit({ ...questionToEdit, name: nameQuestion });
  };

  // Aba que recebe a questão que vai ser editada
  const currentQuestion = (event, index) => {
    if (editing === true) {
      setEditing(false);
      eraseQuestionForm();
      return;
    }
    setPage(index);
    const questionToEdit = { ...list[`question${index - 1}`] };
    switch (questionToEdit.typeQuestion) {
      case 1:
        setValue(0);
        break;
      case 2:
        setValue(1);
        break;
      case 3:
        setValue(2);
        break;
      default:
        console.log("não é a questão 1, 2 ou 3.");
        break;
    }
    editingQuestion(questionToEdit, `question${index - 1}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Multipla Escolha" {...a11yProps(0)} />
          <LinkTab label="Escolha Unica" {...a11yProps(1)} />
          <LinkTab label="Textual" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Checkbox
          questionCheckbox={questionChange}
          erase={erase}
          eraseQuestionForm={eraseQuestionForm}
          editing={editing}
          questionToEdit={questionToEdit}
          questionEditedChange={questionEditedChange}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Choice
          questionChoice={questionChange}
          erase={erase}
          eraseQuestionForm={eraseQuestionForm}
          editing={editing}
          questionToEdit={questionToEdit}
          questionEditedChange={questionEditedChange}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Text
          questionText={questionChange}
          erase={erase}
          eraseQuestionForm={eraseQuestionForm}
          editing={editing}
          questionToEdit={questionToEdit}
          questionEditedChange={questionEditedChange}
        />
      </TabPanel>
      <div className={classes.cardActions}>
        {editing ? (
          <Button disableRipple disableTouchRipple onClick={handleSubmitEdit}>
            <Tooltip
              title="Editar Questão"
              placement="top-start"
              aria-label="Edit"
              arrow
            >
              <Fab className={classes.fabGreen} aria-label="edit">
                <EditIcon />
              </Fab>
            </Tooltip>
          </Button>
        ) : (
          <Button disableRipple disableTouchRipple onClick={handleSubmitAdd}>
            <Tooltip
              title="Criar Questão"
              placement="top-start"
              aria-label="Add"
              arrow
            >
              <Fab className={classes.fabGreen} aria-label="add">
                <AddIcon />
              </Fab>
            </Tooltip>
          </Button>
        )}
        <Pagination
          size="large"
          variant="text"
          color="primary"
          page={editing ? page : 0}
          count={Object.keys(list).length}
          hidePrevButton
          hideNextButton
          onChange={currentQuestion}
          siblingCount={5}
        />
        <Button disableRipple disableTouchRipple onClick={handleSubmitDelete}>
          <Tooltip
            title="Deletar Questão"
            placement="top-start"
            aria-label="Delete"
            arrow
          >
            <Fab className={classes.fabRed} aria-label="">
              <ClearIcon />
            </Fab>
          </Tooltip>
        </Button>
      </div>
    </div>
  );
}
