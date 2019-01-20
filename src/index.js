import React from 'react';
import ReactDOM from 'react-dom';
import 'com/index.css';
import App from "comp/app"
import {Provider} from "react-redux"
import store from "store"


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
, document.getElementById('root'));

