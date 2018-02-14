import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function listReducer(state = initialState.lists, action) {


    switch (action.type) {

        case type.LOAD_LIST_SUCCESS: return action.lists;


        case type.CREATE_LIST_SUCCESS: return [
            ...state, Object.assign({}, action.list)
        ];


        case type.UPDATE_LIST_SUCCESS: return [
            ...state.filter((list) => list.id !== action.list.id),
            Object.assign({}, action.list)
        ];

        default: return state;

    }

}    