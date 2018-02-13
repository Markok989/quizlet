import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { stat } from 'fs';

export default function chaptersReducer(state = initialState.chapters, action) {

    switch (action.type) {

        case types.LOAD_CHAPTERS_SUCCESS: return action.chapters;

        case types.CREATE_CHAPTER_SUCCESS: return [...state, Object.assign({}, action.chapter)];


        case types.UPDATE_CHAPTER_SUCCESS:
            return [...state.filter((chapter) => chapter.id !== action.chapter.id),
            Object.assign({}, action.chapter)];

        // vraca se state
        default: return state;
    }
}
