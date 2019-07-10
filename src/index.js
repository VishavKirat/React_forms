import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger'
import './index.css';
import App from './App';
import reducer from './Redux-store/Reducer/index.js'
const logger = createLogger({
    collapsed : true
})
const store = createStore(reducer,applyMiddleware(logger));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

