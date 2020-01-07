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
            <div className={!this.state.data ? "nav-modal-smooth" : "nav-modal-smooth active"}></div>
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
                <div className={!this.state.data ? "nav-modal-inner" : "nav-modal-inner active"}></div>

                    <div className={!this.state.data ? "nav-elements" : "nav-elements active"}>
                        <div onClick={this.load}>selected works</div>
                        <p><strong className="flex">I build for the web.</strong>  A selection of curated projects, UI goodies, and demos.</p>
                        <div onClick={this.load}>who the f*ck</div>
                        <p>Allow me to <strong className="flex"> introduce myself.</strong>   Broadcasting live from the gutter.</p>
                        <div onClick={this.load}>get in touch</div>
                        <p>Available for exciting digital projects in 2020.<strong className="flex"> Let's build it.</strong> </p>
                    </div>
                </div>
            </div>
        )
    }
}