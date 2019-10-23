import React, { Component } from 'react'
import './preloader.css';

import logoDillcoColor from '../../images/Logo/LogoDillcoColor.webp'

export default class Preloader extends Component {
    render() {
        return (
        <div className={this.props.className}>
            <div className="preloader-loading-wrapper">
                <div className="loading">
                    <img src={logoDillcoColor} alt='logo dillco' />
                </div>
                <div className="loading-text">
                    <div className="loading-text-color1">preparing</div>
                    <div className="loading-text-color2">the</div>
                    <div className="loading-text-color3">cocoa</div>
                </div>
            </div>
        </div>
        )
    }
}



