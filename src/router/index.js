import React from 'react';
import { Route, Switch } from 'react-router';
import App from '../App';
// import Home from '../components/HomePage/HomePage';
import About from '../components/AboutPage/AboutPage';
import NavBar from '../components/common/NavBar';
import LessonPage from '../components/LessonPage/LessonPage';


const routes = (

    <div>

        <NavBar />

        <Switch>

            <Route exact path="/" component={App} />
            <Route path="/lesson" component={LessonPage} />
            <Route path="/lesson/:id" component={LessonPage} />
            <Route path="/about" component={About} />

        </Switch>

    </div>

);

export default routes;