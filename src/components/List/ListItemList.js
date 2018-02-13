import React, { Component, PropTypes } from 'react';


import ListItemRow from './ListItemRow';

const ListItemList = ({ chapters }) => {

    console.log('test', chapters);

    return (

        <div>

            {
                chapters.map((chapter) =>
                    <ListItemRow key={chapter.id} chapter={chapter} />
                )}

        </div>

    );

}



export default ListItemList;