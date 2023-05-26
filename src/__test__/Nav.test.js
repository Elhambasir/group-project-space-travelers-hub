import RocketList from '../components/RocketsList';
import Mission from '../components/Mission';
import MyProfile from '../components/MyProfile';
import Nav from '../components/Nav';
import * as React from "react";
import { create } from "react-test-renderer";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux/store';

describe("My app", () => {
  it("renders correctly", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
        <Nav />
        <Routes path="/" element={<RocketList />}>
          <Route index element={<RocketList />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="*" element={<h3>No Match</h3>} />
        </Routes>
        </Provider >
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});