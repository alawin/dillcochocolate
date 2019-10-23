import React, { Component } from 'react';
import "./imageloader.css";

const _loaded = {};
export default class ImageLoader extends Component {
    //initial state: image loaded stage
    state = {
        loaded: _loaded[this.props.src]
    };

    //define our loading and loaded image classes
    static defaultProps = {
        className: "",
        loadingClassName: "img-loading",
        loadedClassName: "img-loaded"
    };

    //image onLoad handler to update state to loaded
    onLoad = () => {
        _loaded[this.props.src] = true;
        this.setState(() => ({ loaded: true }));
    };

    render() {
        let { className, loadedClassName, loadingClassName, ...props } = this.props;

        className = `${className} ${this.state.loaded
            ? loadedClassName
            : loadingClassName}`;

        return <img
            src={this.props.src}
            alt={this.props.alt}
            style={this.props.style}
            onClick={this.props.onClick}
            className={className}
            onLoad={this.onLoad} />
    }
}



