import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from "./Sip/Test";
import {simpleBar} from './Sip/reducers/SimpleBarReducer';
import {gridData} from './Sip/reducers/GridDataReducer';
import {combineReducers, createStore} from "redux";

/*const store = configureStore('sip', combineReducers({sip: combineReducers(Object.assign(
        {},
        { login },
        { sip },
        { simpleBar },
        { settings }
    ))}));*/
/*const store = {simpleBar};*/

let reducers = combineReducers({sip:combineReducers({
    simpleBar: simpleBar,
        gridData: gridData
})});

let store = createStore(reducers);


ReactDOM.render(
    <React.StrictMode>
        <Test store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
