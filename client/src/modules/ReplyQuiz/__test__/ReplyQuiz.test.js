import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { mount, configure } from "enzyme";
import EnzymeToJson from "enzyme-to-json";
import React from "react";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import ReplyQuiz from "../ReplyQuiz";

const ReplyQuizComponent = ReplyQuiz.routeProps.component;

const mockAppState = {
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

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "http://localhost:3000/quiz/reply/609ef4a7a37baf6c49245369",
  }),
}));

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = [];
const store = mockStore(initialState);

configure({ adapter: new Adapter() });
it("ReplyQuiz é renderizado ", () => {
  useSelectorMock.mockReturnValue({ ...mockAppState });

  const subject = mount(
    <Provider store={store}>
      <ToastProvider placement="bottom-right">
        <ReplyQuizComponent />
      </ToastProvider>
    </Provider>
  );
  expect(EnzymeToJson(subject)).toMatchSnapshot();
});
