import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import SignIn from "../SignIn";

const SignInComponent = SignIn.routeProps.component;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = [];
const store = mockStore(initialState);

it("SignIn é renderizada ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <SignInComponent />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
