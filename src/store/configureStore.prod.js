import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { responsiveStoreEnhancer } from 'redux-responsive';


export default function configureStore(initialState) {

    return createStore(

        rootReducer,
        initialState,
        responsiveStoreEnhancer,
        applyMiddleware(thunk)

    );

}