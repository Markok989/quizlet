import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from './components/Drawer/index';
import { connect } from 'react-redux'
import ListItem from './components/List/ListItem';
import routes from './router';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


const styles = {

  drawer_container: {
    backgroundColor: "Lavender",
    minHeight: '100%',
    maxHeight: '1000%'
  },

  drawer_header: {
    margin: '0px',
    paddingBottom: '10px'
  },

  drawer_header_container: {
    padding: '10px'
  },

  body_header: {
    margin: '0px',
    padding: '10px'
  },

  responsive_toggler: {
    width: 250,
    paddingTop: 15
  }

};

class App extends Component {

  render() {

    // const {
    //   toggleDrawerOpen,
    //   browser,
    //   responsiveDrawer,
    //   toggleDrawerDock,
    //   setResponsive
    // } = this.props;

    return (

      <div>

        <div>

          <ResponsiveDrawer openSecondary={false}>

            <div style={styles.drawer_container}>

              <div style={styles.drawer_header_container}>

                <h1 style={styles.drawer_header}>Drawer</h1>
                <ListItem />

              </div>

            </div>

          </ResponsiveDrawer>

          <BodyContainer openSecondary={false}>

            <Link to="/">

              <ResponsiveAppBar
                title={'Responsive Material-UI Drawer'}
              />
            </Link>
            <h1>test</h1>

            <div style={{ margin: '10px' }}>

              <h1 style={styles.body_header}>Body</h1>
              {routes}

            </div>

          </BodyContainer>

        </div>

      </div>

    );

  }

};

App.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  toggleDrawerDock: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {

  const { browser, responsiveDrawer } = state;

  return {
    browser,
    responsiveDrawer
  };

};

const mapDispatchToProps = (dispatch) => {

  return {

    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen())
    },

    toggleDrawerDock: () => {
      dispatch(toggleDrawerDock())
    },

    setResponsive: (isResponsive) => {
      dispatch(setResponsive(isResponsive))
    }

  }

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
