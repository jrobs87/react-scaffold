// Import React + ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Import Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Routes (pages).
import RouteZero from './routes/1-home';
import RouteOne from './routes/2-pageOne';
import RouteTwo from './routes/3-pageTwo';
import RouteNotFound from './routes/5-page404';
import RouteAPI from './routes/4-pageAPI';
import ReactTransitionGroup from './routes/6-pageRTG';
import Sandbox from './routes/7-pageSandbox';
import SandboxNav from './routes/8-pageSandbox';
import SandboxNavStatic from './routes/8-pageSandbox-nav-static';
import SandboxAPI from './routes/9-pageSandboxAPI';
import RouteIndex from './routes/0-pageIndex';

// Import Components.
// import Nav from './components/Nav';
import SideNav from './components/SideNav';
// import SideNavFixed from './components/SideNavFixed';

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
        <SandboxNav />
        <SideNav />
        {/* Switch is used to provide a fallback route (404 page) */}
        <Switch>
            <Route exact path='/' component={RouteZero} />
            <Route path='/route-1' component={RouteOne} />
            <Route path='/route-2' component={RouteTwo} />
            <Route path='/route-api' component={RouteAPI} />
            <Route path='/route-rtg' component={ReactTransitionGroup} />
            <Route path='/route-sandbox' component={Sandbox} />
            <Route path='/route-sandbox-nav' component={SandboxNav} />
            <Route exact path='/route-sandbox-nav-static' component={SandboxNavStatic} />
            <Route exact path='/route-sandbox-api' component={SandboxAPI} />
            <Route path='/route-index' component={RouteIndex} />
            <Route component={RouteNotFound} />
        </Switch>
    </Router>
)

// Call the render DOM method to render the app - entry point to HTML.
ReactDOM.render(routing, document.getElementById('root'));

