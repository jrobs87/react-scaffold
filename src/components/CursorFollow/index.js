import React from 'react';

import './index.css';

export default class CursorFollow extends React.Component {

    componentDidMount() {
        console.log('loaded');
    }

    render() {
        return (
            <p>
                Cursor Follow element will allow for custom cursor interactions.
            </p>
        )
    }
}