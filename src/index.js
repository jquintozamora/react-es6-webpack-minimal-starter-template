import { AppContainer } from 'react-hot-loader'; // required  
import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './containers/App'; // App

const mountApp = document.getElementById('reporting');
 
ReactDOM.render(  
    <AppContainer component={App} />,
    mountApp
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        ReactDOM.render(
            <AppContainer component={require('./containers/App').default} />,
            mountApp
        );
    });
}