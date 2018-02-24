import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chaptersReducer(state = initialState.chapters, action) {

    // console.log('CHAPTER REDUCER action JSON: ', JSON.stringify(action));
    // console.log('CHAPTER REDUCER action: ', (action));
    // console.log('CHAPTER REDUCER state JSON: ', JSON.stringify(state));
    // console.log('CHAPTER REDUCER state: ', (state));

    switch (action.type) {

        // loading
        case types.LOAD_CHAPTERS_SUCCESS: return action.chapters;

        // creating
        case types.CREATE_CHAPTER_SUCCESS: return [...state, Object.assign({}, action.chapter)];

        // updating
        case types.UPDATE_CHAPTER_SUCCESS:

            return [

                ...state.filter((chapter) => chapter.id !== action.chapter.id),
                Object.assign({}, action.chapter)

            ];

        // remove
        case types.REMOVE_CHAPTER_SUCCESS:

            return [

                ...state.filter((chapter) => {

                    return (chapter.id !== action.chapter.id)

                })

            ];


        case types.REMOVE_LESSON_SUCCESS:

            // console.log('STATE RED: ', JSON.stringify(state));

            const c = state.map(chp => {

                // console.log("TTT: ", JSON.stringify(chp));

                if (chp.id === action.lesson.chapterID) {

                    return chp.lessons.filter((less) => {

                        const le = less.id;
                        const provera = le !== action.lesson.id;
                        return provera;

                    });

                } else {

                    // console.log("Return chapter " + JSON.stringify(chp));
                    return chp;

                }

            })
            // console.log("CCCC: ", JSON.stringify(c));
            return [...c]

        // return [

        //     ...state.filter((chapter) => {
        //         console.log("TEST: ", action.lesson.id, action.lesson.chapterID);
        //         console.log('Lessons inside chapter: ', (chapter.lessons));

        //         const lesson = chapter.lessons.filter((less) => {
        //             const le = less.id;
        //             const provera = le !== action.lesson.id;
        //             return provera;
        //         });

        //         console.log('lessons jabadaba do : ', lesson);

        //         return lesson;
        //     })

        // ];

        default: return state;

    }

}