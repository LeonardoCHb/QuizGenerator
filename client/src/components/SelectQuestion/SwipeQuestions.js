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
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Checkbox from "../TypeQuestions/Checkbox.js";
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
  const [erase, eraseQuestionForm] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sendQuestions = async () => {
    await handleQuestion(list);
  };

  useEffect(sendQuestions, [list]);

  const handleSubmit = () => {
    const newQuestion = {};
    const key = Object.keys(list).length;
    newQuestion.hasResponse = question.hasResponse;
    newQuestion.options = question.options;
    newQuestion.wording = question.wording;
    newQuestion.response = question.response;
    newQuestion.typeQuestion = question.typeQuestion;
    const objetoVazio = {};
    objetoVazio[`question${key}`] = { ...newQuestion };
    setList({ ...list, ...objetoVazio });
    setQuestion({ ...initialQuestion });
    eraseQuestionForm(true);
  };

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
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Choice
          questionChoice={questionChange}
          erase={erase}
          eraseQuestionForm={eraseQuestionForm}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Text
          questionText={questionChange}
          erase={erase}
          eraseQuestionForm={eraseQuestionForm}
        />
      </TabPanel>
      <div className={classes.cardActions}>
        <Button disableRipple disableTouchRipple onClick={handleSubmit}>
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
        <Button disableRipple disableTouchRipple>
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
