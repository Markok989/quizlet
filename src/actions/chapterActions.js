import * as types from './actionTypes';
import chaptersApi from '../api/mockChaptersApi'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';


// action for loading chapters
export function loadChaptersSuccess(chapters) {

    return {
        type: types.LOAD_CHAPTERS_SUCCESS, chapters
    };

}

// action for creating chapters
export function createChapterSuccess(chapter) {

    return {
        type: types.CREATE_CHAPTER_SUCCESS, chapter
    };

}

// action for removing chapters
export function removeChapterSuccess(chapter) {

    return {
        type: types.REMOVE_CHAPTER_SUCCESS, chapter
    };

}


// action for updateing chpater
export function updateChapterSuccess(chapter) {

    return {
        type: types.UPDATE_CHAPTER_SUCCESS, chapter
    };

}

/*
- function for loading chapters
*/
export function loadChapters() {

    return function (dispatch) {

        return chaptersApi.getAllChapters().then(chapters => {

            dispatch(loadChaptersSuccess(chapters));

        }).catch(error => {

            throw (error);
            
        });

    };

}

