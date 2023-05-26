import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import store from '../redux/store';

describe('Component render testing', () => {
  it('Mission page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
