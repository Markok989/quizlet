import * as types from './actionTypes';
// import mockChaptersApi from '../api/mockChaptersApi';
// import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadLessonsSucces(lessons) {

    return {
        type: types.LOAD_LESSON_SUCCESS,
        lessons,
    };

};

export function createLessonsSuccess(lesson) {

    return {
        type: types.CREATE_LESSON_SUCCESS, lesson
    };

};

export function updateLessonsSuccess(lesson) {

    return {
        type: types.UPDATE_LESSON_SUCCESS, lesson
    };

};

export function removeLessonsSuccess(lesson) {
    // console.log("Evo me u akciji " + JSON.stringify(lesson));
    return {
        type: types.REMOVE_LESSON_SUCCESS, lesson
    };

};
