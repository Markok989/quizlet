import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ListItemList from './ListItemList';

import { connect } from 'react-redux';
// import * as chapterActions from '../../actions/chapterActions';

class ListNested extends React.Component {

    state = {
        open: false,
    };

    handleToggle = () => {

        this.setState({
            open: !this.state.open,
        });

    };

    handleNestedListToggle = (item) => {

        this.setState({
            open: item.state.open,
        });

    };

    render() {

        const { chapters } = this.props;

        return (

            <div>

                <br />

                <div>

                    <List>
                        <Subheader>Nested List Items</Subheader>
                        <ListItemList chapters={chapters} />
                    </List>

                </div>

            </div>

        );

    }

}



function mapStateToProps(state, ownProps) {

    return {
        chapters: state.chapters
    };

};



export default connect(mapStateToProps)(ListNested);