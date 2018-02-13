import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/HomePage/HomePage';
import About from '../components/AboutPage/AboutPage';
import NavBar from '../components/common/NavBar';


const routes = (

    <div>

        <NavBar />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>

    </div>

);

export default routes