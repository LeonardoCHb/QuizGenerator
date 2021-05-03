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
import React, { useState } from "react";

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

export default function NavTabs({ handleQuestion, initialQuestion }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setQuestion({ ...question, typeQuestion: newValue + 1 });
    setValue(newValue);
  };

  const [question, setQuestion] = useState({ ...initialQuestion });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleQuestion(question);
  };

  const questionChange = (wording, options, hasResponse, response) => {
    const newQuestion = { ...question };
    newQuestion.hasResponse = hasResponse;
    newQuestion.question.options = options;
    newQuestion.question.wording = wording;
    newQuestion.question.response = response;
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
          <LinkTab
            label="Multipla Escolha"
            href="/checkbox"
            {...a11yProps(0)}
          />
          <LinkTab label="Escolha Unica" href="/choice" {...a11yProps(1)} />
          <LinkTab label="Textual" href="/text" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Checkbox questionCheckbox={questionChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Choice questionChoice={questionChange} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Text questionText={questionChange} />
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
