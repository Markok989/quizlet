import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import { ListItem } from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import { Link } from 'react-router-dom';
import * as lessonsActions from '../../actions/lessonsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class ListItemRow extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            chapter: '',
            id: '',
            lesson: ''
        };

    };


    componentDidUpdate() {

        console.log('KOMPONENTA DID: ');

        this.props.actions.updateLessonsSuccess({
            id: this.props.id
        });

    };

    handleChange = (event) => {

        this.setState({
            lesson: event.target.value
        });

    }

    render() {

        const { chapter } = this.props;
        console.log('CHAPTER: ', chapter);
        console.log('CHAPTER: ', JSON.stringify( chapter));

        return (

            <div>

                <ListItem
                    primaryText={chapter.chapterName}
                    leftIcon={< ActionDelete onClick={() => { }} />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={

                        [
                            chapter.lessons.map((lesson) => {

                                return (

                                    <Link to={"/lesson/" + chapter.id + "-" + lesson.id}>

                                        <ListItem
                                            key={lesson.id}
                                            primaryText={lesson.label}
                                            onChange={this.handleChange}
                                            rightIcon={
                                                < ActionDelete
                                                    onClick={() => { this.removeLesson(lesson.id, chapter.id) }}
                                                />
                                            }
                                        />

                                    </Link>

                                );

                            })

                        ]

                    }

                />

                <ListItem rightIcon={<ContentAddBox onClick={() => { }} />}>

                    <input
                        placeholder="Add lesson"
                    />

                </ListItem>

            </div>

        );

    }


    removeLesson = (id, chapterID) => {

        // console.log('ID ZA CHAPTER: ', chapterID);

        this.props.actions.removeLessonsSuccess({
            id: id,
            chapterID: chapterID
        })

        // this.props.actions.updateLessonsSuccess({
        //     id: this.props.id
        // })

    };

    /* 
        addLesson = () => {
    
            const ID = this.id();
    
            const lessons = [
                ...this.state.lessons,
                { id: ID }
            ];
    
            this.setState({
                lessons
            });
    
        }
    
        id = () => {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
     */

};


function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(lessonsActions, dispatch)
    };

};


export default connect(null, mapDispatchToProps)(ListItemRow);