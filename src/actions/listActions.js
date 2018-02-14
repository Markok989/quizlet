import * as types from './actionTypes';
import mockChaptersApi from '../api/mockChaptersApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadListSuccess(lists) {

    return {
        type: types.LOAD_LIST_SUCCESS, lists
    };

}

export function createListSuccess(list) {

    return {
        type: types.CREATE_LIST_SUCCESS, list
    };

}

export function updateListSuccess(list) {

    return {
        type: types.UPDATE_LIST_SUCCESS, list
    };

}



export function loadList() {

    return function (dispatch) {

        dispatch(beginAjaxCall());
        return mockChaptersApi.getAllChapters().then(quizzes => {

            dispatch(loadQuizzesSuccess(quizzes));

        }).catch(error => {
            throw (error);
        });

    };

}


export function saveQuiz(quiz) {

    return function (dispatch, getState) {

        dispatch(beginAjaxCall());

        return quizApi.saveQuiz(quiz).then(quiz => {

            dispatch(createQuizSuccess(quiz));

        }).catch(error => {

            dispatch(ajaxCallError(error));
            throw (error);

        });

    };

}
