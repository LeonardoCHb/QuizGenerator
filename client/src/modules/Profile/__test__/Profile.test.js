import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import Profile from "../Profile";

const user = {
  createdAt: "2021-04-30T23:54:53.614Z",
  _id: "608cce84d339170cd8ec9894",
  name: "Fernando",
  email: "fernando@email",
  password: "$2a$12$CDydrU0e8OwZZZNg0pWrgeuRBHaDimQplLKxBwNmDPvlrDJ24J69y",
  __v: 0,
};

localStorage.setItem("profile", JSON.stringify({ result: { ...user } }));

const ProfileComponent = Profile.routeProps.component;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = [];
const store = mockStore(initialState);

it("Profile é renderizado ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ProfileComponent />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
