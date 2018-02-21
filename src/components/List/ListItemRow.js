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
            chapterId: '',
            id: '',
            lesson: ''
        };

    };


    componentDidUpdate() {

        this.props.actions.updateLessonSuccess({
            chapterId: this.state.chapterId,
            id: this.state.id,
            label: this.state.lesson
        });

    };

    handleChange = (event) => {

        this.setState({
            lesson: event.target.value
        });

    }

    render() {

        const { chapter } = this.props;

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
                                            value={this.state.lesson}
                                            onChange={this.handleChange}
                                            rightIcon={
                                                < ActionDelete
                                                    onClick={this.removeLesson}
                                                />
                                            }
                                        />

                                    </Link>

                                );

                            })

                        ]

                    }

                />

                <ListItem
                    rightIcon={
                        <ContentAddBox
                            onClick={() => { }}
                        />
                    }
                >

                    <input
                        placeholder="Add lesson"
                    />

                </ListItem>

            </div>

        );

    }


    removeLesson = (id) => {

        if (this.state.lessons.length > 0) {

            const lessons = this.state.lessons.filter(

                (lesson) => lesson.id !== id

            );

            this.setState({ lessons });
            console.log(lessons, "lekcije druga")

        }

    };


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

};

function mapStateToProps(state, ownProps) {

    return {
        lessons: state.lessons
    };

};

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(lessonsActions, dispatch)
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(ListItemRow);