import React, { Component } from 'react'
import './twocolumn.css'
import NormalTitle from '../Title/NormalTitle';
import BottomTitle from '../Title/BottomTitle';

export default class TwoColumn extends Component {
    render() {
        return (
            <section className='column-wrapper'>
                <div className='left-column'>
                    <BottomTitle text={this.props.leftTitle} />
                    <div className='left-column__text'>{this.props.leftText1}</div>
                </div>
                <div className='right-column'>
                    <NormalTitle text={this.props.rightTitle} />
                    <div className='right-column-wrapper'>
                        <div className='right-column__text'>{this.props.rightText1}</div>
                        <div className='right-column__text'>{this.props.rightText2}</div>
                        <div className='right-column__text'>{this.props.rightText3}</div>
                    </div>
                </div>
            </section>
        )
    }
}
