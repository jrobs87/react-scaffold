import React from 'react';

import './index.css';

// Declaring the Component Name and Log method.
const log = function (message) {
    console.log(`SideNav: ${message}.`);
}

export default class CursorFollow extends React.Component {

    componentDidMount() {
        log('mounted')
    }

    render() {
        return (
            <div>
                Cursor Follow element will allow for custom cursor interactions.
            </div>
        )
    }
}