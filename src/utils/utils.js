import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../redux/store';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    customStore = store,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={customStore}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return { store:customStore, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
