import React from 'react';

import './index.css';
import './navIcon.css';

export default class SandboxNavStatic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        }

        this.load = this.load.bind(this);
    }

    // Simple Component Method
    load = () => {
        this.setState(({
            data: !this.state.data
        }))
    };

    render() {
        return (
            <div className="sandbox-wrapper">
             <div className="nav-toggle" onClick={this.load}>
                 {this.state.data.toString()}
             </div>
            </div>
        )
    }
}