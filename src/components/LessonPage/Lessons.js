import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lessonsActions from '../../actions/lessonsActions';

class Lessons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chapterId: '',
            id: '',
            lesson: ''
        };

    }


    componentWillMount() {

        if (this.state.id === '' && this.state.chapterId === '') {

            this.setState({
                id: this.props.id,
                chapterId: this.props.chapterId
            });

        }

    };

    componentDidMount() {

        this.props.actions.updateLessonsSuccess({
            chapterId: this.state.chapterId,
            id: this.state.id,
            label: this.state.lesson
        });

    };


    handleChange = (event) => {

        this.setState({
            lesson: event.target.value
        });

    };

    render() {

        const { id, removeLesson, chapterId } = this.props;

        return (

            <div className="panel panel-default nested-fields">

                <div className="panel-body">

                    <input
                        type="submit"
                        value="Remove Lesson"
                        className="btn btn-default"
                        onClick={() => removeLesson(id)} />

                </div>

            </div>

        );

    }

}



function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(lessonsActions, dispatch)
    };

};


export default connect(null, mapDispatchToProps)(Lessons);

