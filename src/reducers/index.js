import { responsiveStateReducer } from 'redux-responsive';
import { combineReducers } from 'redux';
import drawer from './drawerReducer';
import chapters from './chapterReducer';

const rootReducer = combineReducers({

    browser: responsiveStateReducer,
    responsiveDrawer: drawer,
    chapters

});

export default rootReducer;
