import React, { Component } from 'react'
import './duocolumn.css'
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import LeftTitle from '../Title/LeftTitle';
import NormalTitle from '../Title/NormalTitle';
// import Column from '../Column/Column';

export default class DuoColumn extends Component {
    render() {
        return (
            <section className='duocolumn-wrapper'>
                <div className='left-duocolumn'>
                    <LeftTitle text={this.props.leftTitle} />
                    <div className='left-duocolumn-wrapper'>
                        <div className="left-duocolumn-wrapper__top">
                            <div className='left-duocolumn__text'>{this.props.leftText1}</div>
                            <div className='duocolumn-contact-wrapper'>
                                <FaWhatsapp/>
                                <a
                                    href="https://bit.ly/2KDaPqI"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="duocolumn-contact-wrapper__item">
                                    Dillco Customer Care
                                </a>
                            </div>
                        </div>
                        <div className="left-duocolumn-wrapper__bottom">
                            <div className='left-duocolumn__text'>{this.props.leftText2}</div>
                            <div className='duocolumn-contact-wrapper'>
                                <FaEnvelope/>
                                <a
                                    href="mailto:dillcochocolate@gmail.com"
                                    className="duocolumn-contact-wrapper__item"
                                    >
                                    dillcochocolate@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-duocolumn'>
                    <NormalTitle text={this.props.rightTitle} />
                    <div className='right-duocolumn-wrapper'>
                        <div className='right-duocolumn__text'>{this.props.rightText1}</div>
                        <div className='right-duocolumn__text'>{this.props.rightText2}</div>
                        <div className='right-duocolumn__text'>{this.props.rightText3}</div>
                        <div className='right-duocolumn__children'>{this.props.children}</div>
                    </div>
                </div>
            </section>
        )
    }
}
