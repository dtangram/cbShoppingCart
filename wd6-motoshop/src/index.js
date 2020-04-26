/* Magnanimous Comic Book Shop
Author/Developer:  Douglas T. Angram
WDD-469 Project & Portfolio - Full Sail University
Source:  index.js
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/main.css'
import motocartReducer from './storeReducers/motocartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create an instance of "createStore" and pass our reducer parameter
const motoshopStore = createStore(motocartReducer, composeWithDevTools());
// const motoshopStore = createStore(motocartReducer);

// Render - Use Provider to connect store
ReactDOM.render(<Provider store={motoshopStore}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
