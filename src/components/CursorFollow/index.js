import React from 'react';

import './index.css';

export default class CursorFollow extends React.Component {

    // update = function() {
    //    context.beginPath();
    //    context.arc(100, 100, 50, 0, 2 * Math.PI, true)

    // }

    componentDidMount() {
        console.log('loaded');
    }

    render() {
        return (
            <h2>Cursor Follow</h2>
        )
    }
}