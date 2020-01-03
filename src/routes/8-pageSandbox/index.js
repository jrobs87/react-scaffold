import React from 'react';
import Gallery from 'react-photo-gallery';

import img1 from '../../imgs/IMG_0180.JPG';
import img2 from '../../imgs/IMG_0181.JPG';
import img3 from '../../imgs/IMG_0182.JPG';
import img4 from '../../imgs/IMG_0183.JPG';
import img5 from '../../imgs/IMG_0184.JPG';

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
                {/* <Gallery photos={this.photos} lightbox /> */}
                <div className={!this.state.data ? "nav-trigger" : "nav-trigger active"} onClick={this.load}>
                <div className={!this.state.data ? "nav-trigger_text" : "nav-trigger_text active"}>
                    <div className={!this.state.data ? "menu-open" : "menu-open active"}>MENU</div>
                    <div className={!this.state.data ? "menu-close" : "menu-close active"}>CLOSE</div>
                </div>
                </div>

                <div className={!this.state.data ? "nav-content" : "nav-content active"}>

                    <div className={!this.state.data ? "nav-elements" : "nav-elements active"}>
                        <div onClick={this.load}>fotografía</div>
                        <p>Selected works from all projects spanning a decade of human culture.</p>
                        <div onClick={this.load}>diario</div>
                        <p>Musings, ramblings, and utter bullshit.</p>
                        <div onClick={this.load}>i'MI</div>
                        <p>Talk about how baller I am at life.</p>
                    </div>
                </div>
            </div>
        )
    }
}