import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function loadLessonReducer(state = initialState.lessons, action) {

    switch (action.type) {

        case types.LOAD_LESSON_SUCCESS:
            return [action.lessons];

        case types.CREATE_LESSON_SUCCESS: return [
            ...state, Object.assign({}, action.lesson)
        ];

        case types.UPDATE_LESSON_SUCCESS: return [
            ...state.filter((lesson) => lesson.id !== action.lesson.id),
            Object.assign({}, action.lesson)
        ];

        case types.REMOVE_LESSON_SUCCESS: return [
            ...state.filter((lesson) => {

                return (lesson.id !== action.lesson.id)

            })

        ];


        default: return state;

    }

}

