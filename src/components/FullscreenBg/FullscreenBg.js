import React, { Component } from 'react'
import './fullscreenbg.css';



export default class FullscreenBg extends Component {
    state = { src: null };
    componentDidMount() {
        const { src } = this.props;

        const imageLoader = new Image();
        imageLoader.src = src;

        imageLoader.onload = () => {
        this.setState({ src });
        };
    }
    render() {
        return (
            <section
                {...this.props}
                style={{ backgroundImage: `url(${this.state.src || this.props.placeholder})` }}
                className="fullscreenBg"
                id = {this.props.id}
                >
                {this.props.children}
            </section>
        )
    }
}


