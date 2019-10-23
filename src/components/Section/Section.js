import React, { Component } from "react";

export default class FullscreenBg extends Component {
  render() {
      return (
          <section
              className="fullscreenBg"
              style={{backgroundImage: `url(${this.props.bg})`}}>
              {this.props.children}
          </section>
      )
  }
}

