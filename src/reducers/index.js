import { responsiveStateReducer } from 'redux-responsive';
import { combineReducers } from 'redux';
import drawer from './drawerReducer';
import chapters from './chapterReducer';
// import lessons from './lessonReducer';
import lists from './listReducers';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({

    browser: responsiveStateReducer,
    responsiveDrawer: drawer,
    // lessons,
    chapters,
    ajaxCallsInProgress,
    lists

});

export default rootReducer;
