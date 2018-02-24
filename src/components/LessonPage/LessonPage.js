import React from 'react';
import { connect } from 'react-redux';
import LessonPageRow from './LessonPageRow';
import * as actions from '../../actions/actionsDrawer';
import { bindActionCreators } from 'redux';

class LessonPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            lesson: Object.assign({}, this.props.lesson)
        };

    };

    componentDidMount() {
        this.props.actions.setDrawerOpen(false);
    }



    render() {

        return (

            <div>

                <div>

                    <h2>Lesson Page</h2>
                    <br />
                    <h3>Lesson Content: </h3>
                    <LessonPageRow key={this.state.lesson.id} lesson={this.state.lesson} />

                </div>

            </div>

        );

    }

}



function mapStateToProps(state, ownProps) {

    const id = ownProps.location.pathname.replace("/lesson/", "");
    const ids = id.split("-");
    const chapter = state.chapters.filter((ch) => ch.id === ids[0]);
    const lesson = chapter[0].lessons.filter((lesson) => lesson.id === ids[1]);
    // console.log("Lekcija provera" + lesson[0]);

    return {
        lesson: lesson[0]
    };

}


function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(actions, dispatch)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);