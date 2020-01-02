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

    photos = [
        {
            src: img1,
            width: 9,
            height: 6
        },
        {
            src: img2,
            width: 1,
            height: 1
        },
        {
            src: img3,
            width: 1,
            height: 1
        },
        {
            src: img4,
            width: 1,
            height: 1
        },
        {
            src: img5,
            width: 1,
            height: 1
        }
    ];

    render() {
        return (
            <div className="wrapper">
                <Gallery photos={this.photos} lightbox />
                <div className="nav-trigger" onClick={this.load}>
                    Click here to update state.
                <button style={{ display: "block" }}> NAVIGATION state: {this.state.data.toString()}</button>
                </div>

                <div className={!this.state.data ? "nav-content" : "nav-content active"}>

                    <div className={!this.state.data ? "nav-elements" : "nav-elements active"}>
                        <div>PHOTOGRAPHY</div>
                        <div>JOURNAL</div>
                        <div>A'MI</div>
                    </div>



                </div>





            </div>
        )
    }
}