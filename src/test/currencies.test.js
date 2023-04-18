import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Currencies from '../components/currencies/Currencies';

describe('Currencies', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Currencies />
        </Provider>
      </BrowserRouter>,
    );

    expect(getByTestId(/currencies/i)).toBeInTheDocument();
  });
});
