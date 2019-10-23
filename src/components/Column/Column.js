import React, { Component } from 'react'
import './column.css'

export default class Column extends Component {
    render() {
        return (
            <section className={this.props.class}>
                {this.props.children}
            </section>
        )
    }
}
