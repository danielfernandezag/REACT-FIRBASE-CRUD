import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
