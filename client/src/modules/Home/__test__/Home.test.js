import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mount, configure } from "enzyme";
import EnzymeToJson from "enzyme-to-json";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { ToastProvider } from "react-toast-notifications";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import QuizCard from "../components/QuizList/QuizCard/QuizCard";
import QuizList from "../components/QuizList/QuizList";
import Home from "../Home";

const HomeComponent = Home.routeProps.component;

const data = {
  questions: [
    {
      hasResponse: true,
      options: ["Atacante", "Batedor", "Goleiro"],
      wording: "Quais posições existem?",
      response: [true, false, true],
      typeQuestion: 1,
    },
    {
      hasResponse: true,
      options: ["1", "2", "3", "4", "5"],
      wording: "Quantas copas tem o Brasil?",
      response: 4,
      typeQuestion: 2,
    },
    {
      hasResponse: false,
      options: null,
      wording: "Qual o seu jogador favorito?",
      response: "",
      typeQuestion: 3,
    },
  ],
  createdAt: "2021-05-12T15:46:36.119Z",
  _id: "609bf85c7542ba2bccf2683f",
  title: "Futebol!",
  description: "Fale sobre futebol!",
  public: true,
  name: "Fernando",
  creator: "608cce84d339170cd8ec9894",
  __v: 0,
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = [];
const store = mockStore(initialState);

it("Home é renderizada ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeComponent />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("QuizList é renderizado ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <QuizList />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

configure({ adapter: new Adapter() });
it("QuizCard é renderizado ", () => {
  const subject = mount(
    <Provider store={store}>
      <ToastProvider placement="bottom-right">
        <QuizCard quiz={data} />
      </ToastProvider>
    </Provider>
  );
  expect(EnzymeToJson(subject)).toMatchSnapshot();
});
