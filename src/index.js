// Import React + ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Import style sheets
import './index.css';

// Import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Home from './Home';
import RouteOne from './RouteOne';
import RouteTwo from './RouteTwo';
import NotFound from './NotFound';
import ToDo from './ToDo';
import CustomNavNF from './NavCustomRefactor';

const routing = (   
    <Router>
    <CustomNavNF />
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/route-1' component={ RouteOne } />
            <Route path='/route-2' component={ RouteTwo } />
            <Route path='/todo' component={ ToDo } />
            <Route component={ NotFound } />
        </Switch>
    </Router>
)

// Call the render DOM method to render the app - entry point to HTML
ReactDOM.render(routing, document.getElementById('root'));

