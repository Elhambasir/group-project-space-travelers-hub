import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import RocketList from '../components/RocketsList';
import store from '../redux/store';

describe('Component render testing', () => {
  it('Mission page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
