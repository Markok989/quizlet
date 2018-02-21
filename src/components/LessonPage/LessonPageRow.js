import React from 'react';
// import { Link } from 'react-router';

const LessonPageRow = ({ lesson }) => {

    return (

        <div>
            <p>{lesson.content}</p>
        </div>

    );

};

export default LessonPageRow;
