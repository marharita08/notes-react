import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import Modal from 'react-modal';
import './index.css';

const rootStr:string = 'root';

const root = ReactDOM.createRoot(
  document.getElementById(rootStr) as HTMLElement
);
Modal.setAppElement(`#${rootStr}`);
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
