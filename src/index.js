// Import React + ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Import Bootstrap basic styling (additional Bootstrap themes can be integrated here).
import 'bootstrap/dist/css/bootstrap.min.css';

// Import stylesheets.
import './index.css';

// Import Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Routes (pages).
import RouteZero from './routes/RouteZero';
import RouteOne from './routes/RouteOne';
import RouteTwo from './routes/RouteTwo';
import RouteNotFound from './routes/RouteNotFound';
import RouteAPI from './routes/RouteAPI';
import RouteIndex from './routes/RouteIndex';

// Import Components.
import Nav from './components/Nav';

const routing = (   
    <Router>
    <Nav />
        <Switch>
            <Route exact path='/' component={ RouteZero } />
            <Route path='/route-1' component={ RouteOne } />
            <Route path='/route-2' component={ RouteTwo } />
            <Route path='/route-api' component={ RouteAPI } />
            <Route path='/route-index' component={ RouteIndex } />
            <Route component={ RouteNotFound } />
        </Switch>
    </Router>
)

// Call the render DOM method to render the app - entry point to HTML.
ReactDOM.render(routing, document.getElementById('root'));

