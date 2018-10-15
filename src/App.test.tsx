import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { AppState } from './state';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const state: AppState = { starWars: { text: 'lol' } };
  ReactDOM.render(
    <Provider store={configureStore()(state)}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
