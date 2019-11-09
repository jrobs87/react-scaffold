// Import React + ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

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

// Import Bootstrap basic styling (additional Bootstrap themes can be integrated here).
import 'bootstrap/dist/css/bootstrap.min.css';

// Import stylesheets.
import './index.css';

// Declaring our app instance - can be named anything - eventually move to a Class Component to
// manage Global State (themes, user login status, etc.)
const routing = (
    // Router must be the top level Component.  
    <Router>
        {/* Nav Options (insert Components here) */}
        <Nav />
        {/* Switch is used to provide a fallback route (404 page) */}
        <Switch>
            <Route exact path='/' component={RouteZero} />
            <Route path='/route-1' component={RouteOne} />
            <Route path='/route-2' component={RouteTwo} />
            <Route path='/route-api' component={RouteAPI} />
            <Route path='/route-index' component={RouteIndex} />
            <Route component={RouteNotFound} />
        </Switch>
    </Router>
)

// Call the render DOM method to render the app - entry point to HTML.
ReactDOM.render(routing, document.getElementById('root'));

