import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chaptersReducer(state = initialState.chapters, action) {

    switch (action.type) {

        // loading
        case types.LOAD_CHAPTERS_SUCCESS: return action.chapters;

        // creating
        case types.CREATE_CHAPTER_SUCCESS: return [...state, Object.assign({}, action.chapter)];

        // updating
        case types.UPDATE_CHAPTER_SUCCESS:
            return [...state.filter((chapter) => chapter.id !== action.chapter.id),
            Object.assign({}, action.chapter)];

        // remove
        case types.REMOVE_CHAPTER_SUCCESS: return [

            ...state.filter((chapter) => {
                return (chapter.id !== action.chapter.id)
            })

        ];

        // vraca se state
        default: return state;

    }

}
