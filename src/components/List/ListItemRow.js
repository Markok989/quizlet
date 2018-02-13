import React, { Component, PropTypes } from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom';

const ListItemRow = ({ chapter }) => {

    return (

        <ListItem
            primaryText={chapter.chapterName}
            leftIcon={<ContentInbox />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={

                [
                    chapter.lessons.map((lesson) => {

                        return (

                            <Link to={"/course/" + lesson.id}>

                                < ListItem
                                    key={lesson.id}
                                    primaryText={lesson.label}
                                    leftIcon={< ActionGrade />}
                                />

                            </Link>

                        );

                    })

                ]

            }

        />

    );

}

export default ListItemRow;