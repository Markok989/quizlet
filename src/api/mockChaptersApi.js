
import delay from './delay';

const chapters = [

    {
        // 1
        "id": "uosfpm4cn",
        "chapterName": "Chapter 1",
        "lessons": [

            {
                // 2
                "chapterId": "uosfpm4cn",
                "id": "go2o9zllu",
                "label": "Lesson 1",
                "content": "Lekcija 1"
            },

            {
                "chapterId": "uosfpm4cn",
                "id": "5fok3c5qu",
                "label": "Lesson 2",
                "content": "Lekcija 2"
            },

            {
                "chapterId": "uosfpm4cn",
                "id": "xgipqeuom",
                "label": "Lesson 3",
                "content": "Lekcija 3"
            },

            {
                "chapterId": "uosfpm4cn",
                "id": "xgtpqeuom",
                "label": "Lesson 4",
                "content": "Lekcija 4"
            }

        ]

    },

    {
        "id": "uosfpm3cn",
        "chapterName": "Chapter 2",
        "lessons": [

            {
                "chapterId": "uosfpm3cn",
                "id": "go2o9zl3u",
                "label": "Lesson 5",
                "content": "Lekcija 5"
            },

            {
                "chapterId": "uosfpm3cn",
                "id": "5fok3c6q3",
                "label": "Lesson 6",
                "content": "Lekcija 6"
            },

            {
                "chapterId": "uosfpm3cn",
                "id": "xgipqouop",
                "label": "Lesson 7",
                "content": "Lekcija 7"
            },

            {
                "chapterId": "uosfpm3cn",
                "id": "xgtpqpuok",
                "label": "Lesson 8",
                "content": "Lekcija 8"
            }

        ]

    },

    {
        "id": "uosfpm6cn",
        "chapterName": "Chapter 3",
        "lessons": [

            {
                "chapterId": "uosfpm6cn",
                "id": "go2o9zl4u",
                "label": "Lesson 9",
                "content": "Lekcija 9"
            },

            {
                "chapterId": "uosfpm6cn",
                "id": "5fok3c6qt",
                "label": "Lesson 10",
                "content": "Lekcija 10"
            },

            {
                "chapterId": "uosfpm6cn",
                "id": "xgipqouom",
                "label": "Lesson 11",
                "content": "Lekcija 11"
            },

            {
                "chapterId": "uosfpm6cn",
                "id": "xgtpqpuoh",
                "label": "Lesson 12",
                "content": "Lekcija 12"
            }

        ]

    },

    {
        "id": "uosfpm8cn",
        "chapterName": "Chapter 4",
        "lessons": [

            {
                "chapterId": "uosfpm8cn",
                "id": "go2o9zl2u",
                "label": "Lesson 13",
                "content": "Lekcija 13"
            },

            {
                "chapterId": "uosfpm8cn",
                "id": "5fok3c6qu",
                "label": "Lesson 14",
                "content": "Lekcija 14"
            },

            {
                "chapterId": "uosfpm8cn",
                "id": "xgipqouou",
                "label": "Lesson 15",
                "content": "Lekcija 15"
            },

            {
                "chapterId": "uosfpm8cn",
                "id": "xgtpqpuom",
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

    };

    static saveChapter(chapter) {

        chapter = Object.assign({}, chapter);

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const minChapterNameLength = 3;
                if (chapter.chapterName.length < minChapterNameLength) {

                    reject(`Title must be at least ${minChapterNameLength} characters.`);

                }

                chapters.push(chapter);
                resolve(chapter);

            }, delay);

        });

    }

}

export default ChapterApi;