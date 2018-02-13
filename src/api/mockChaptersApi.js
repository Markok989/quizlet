
import delay from './delay';


const chapters = [

    {
        // 1
        "id": "_uosfpm4cn",
        "chapterName": "Chapter 1",
        "lessons": [

            {
                // 2
                "id": "_go2o9zllu",
                "label": "Lesson 1",
                "content": "Lekcija 1"
            },

            {
                "id": "_5fok3c5qu",
                "label": "Lesson 2",
                "content": "Lekcija 2"
            },

            {
                "id": "_xgipqeuom",
                "label": "Lesson 3",
                "content": "Lekcija 3"
            },

            {
                "id": "_xgtpqeuom",
                "label": "Lesson 4",
                "content": "Lekcija 4"
            }

        ]

    },

    {
        "id": "_uosfpm3cn",
        "chapterName": "Chapter 2",
        "lessons": [

            {
                "id": "_go2o9zl2u",
                "label": "Lesson 5",
                "content": "Lekcija 5"
            },

            {
                "lessonId": "_uosfpm2cn",
                "id": "_5fok3c6qu",
                "label": "Lesson 6",
                "content": "Lekcija 6"
            },

            {
                "id": "_xgipqouom",
                "label": "Lesson 7",
                "content": "Lekcija 7"
            },

            {
                "id": "_xgtpqpuom",
                "label": "Lesson 8",
                "content": "Lekcija 8"
            }

        ]

    },

    {
        "id": "_uosfpm6cn",
        "chapterName": "Chapter 3",
        "lessons": [

            {
                "id": "_go2o9zl2u",
                "label": "Lesson 9",
                "content": "Lekcija 9"
            },

            {
                "lessonId": "_uosfpm2cn",
                "id": "_5fok3c6qu",
                "label": "Lesson 10",
                "content": "Lekcija 10"
            },

            {
                "id": "_xgipqouom",
                "label": "Lesson 11",
                "content": "Lekcija 11"
            },

            {
                "id": "_xgtpqpuom",
                "label": "Lesson 12",
                "content": "Lekcija 12"
            }

        ]

    },

    {
        "id": "_uosfpm8cn",
        "chapterName": "Chapter 4",
        "lessons": [

            {
                "id": "_go2o9zl2u",
                "label": "Lesson 13",
                "content": "Lekcija 13"
            },

            {
                "lessonId": "_uosfpm2cn",
                "id": "_5fok3c6qu",
                "label": "Lesson 14",
                "content": "Lekcija 14"
            },

            {
                "id": "_xgipqouom",
                "label": "Lesson 15",
                "content": "Lekcija 15"
            },

            {
                "id": "_xgtpqpuom",
                "label": "Lesson 16",
                "content": "Lekcija 16"
            }

        ]

    }

];




class ChapterApi {

    static getAllChapters() {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve(Object.assign([], chapters));

            }, delay);

        });

    }

}

export default ChapterApi;