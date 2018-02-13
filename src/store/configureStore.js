import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export default function configureStore(history) {

    return createStore(

        connectRouter(history)(rootReducer),
        responsiveStoreEnhancer,
        applyMiddleware(thunk, routerMiddleware(history))

    );

}
