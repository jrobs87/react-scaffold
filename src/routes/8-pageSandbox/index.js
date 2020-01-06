import React from 'react';

import './index.css';

export default class SandboxNav extends React.Component {
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
        console.log(`Component updated from render() with updated state of ${this.state.data}`)
    };

    render() {
        return (
            <div className="wrapper">
            <div className="logo">
                tiktaalik design
            </div>
                {/* <Gallery photos={this.photos} lightbox /> */}
                <div className={!this.state.data ? "nav-trigger" : "nav-trigger active"} onClick={this.load}>
                <div className={!this.state.data ? "nav-trigger_text" : "nav-trigger_text active"}>
                    <div className={!this.state.data ? "menu-open" : "menu-open active"}>MENU</div>
                    <div className={!this.state.data ? "menu-close" : "menu-close active"}>CLOSE</div>
                </div>
                </div>

                <div className={!this.state.data ? "nav-content" : "nav-content active"}>

                    <div className={!this.state.data ? "nav-elements" : "nav-elements active"}>
                        <div onClick={this.load}>select works</div>
                        <p>I build for the web. A selection of curated projects, UI goodies, and neat nonsense.</p>
                        <div onClick={this.load}>who the f*ck</div>
                        <p>Allow me to introduce myself.  Broadcasting live from the gutter.</p>
                        <div onClick={this.load}>get in touch</div>
                        <p>Available for exciting digital projects in 2020.  Got a bomber project idea? <strong>Let's build it.</strong> </p>
                    </div>
                </div>
            </div>
        )
    }
}