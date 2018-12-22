import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={configureStore().store}>
    <PersistGate loading={null} persistor={configureStore().persistor}>
        <App />
    </PersistGate>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();