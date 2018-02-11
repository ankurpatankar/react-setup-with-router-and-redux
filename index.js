import React from 'react';
import ReactDOM from 'react-dom';

// Main App
import App from './containers/App';

// Provider from the react-redux library will pass all of the redux store and also provide the dispatch function
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    (
        <Provider store={ store } >
            <App />
        </Provider>
    ),
    document.getElementById('app')
);
