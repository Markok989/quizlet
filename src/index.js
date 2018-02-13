import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import { ConnectedRouter } from 'connected-react-router'
import { loadChapters } from './actions/chapterActions'

const history = createBrowserHistory();
const store = configureStore(history);

store.dispatch(loadChapters());

ReactDOM.render(

    <Provider store={store}>

        <MuiThemeProvider>

            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>

        </MuiThemeProvider>

    </Provider>, document.getElementById('root'));
    
registerServiceWorker();
