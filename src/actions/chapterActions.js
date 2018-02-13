import * as types from './actionTypes';
import chaptersApi from '../api/mockChaptersApi'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';


// akcija za ucitavanje chaptera
export function loadChaptersSuccess(chapters) {

    return {
        type: types.LOAD_CHAPTERS_SUCCESS, chapters
    };

}

// akcija za kreiranje chaptera
export function createChapterSuccess(chapter) {

    return {
        type: types.CREATE_CHAPTER_SUCCESS, chapter
    };

}

// akcija za azuriranje chaptra
export function updateChapterSuccess(chapter) {

    return {
        type: types.UPDATE_CHAPTER_SUCCESS, chapter
    };

}

export function loadChapters() {

    return function (dispatch) {

        return chaptersApi.getAllChapters().then(chapters => {

            dispatch(loadChaptersSuccess(chapters));

        }).catch(error => {

            throw (error);

        });

    };

}

