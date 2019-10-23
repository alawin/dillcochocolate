import React, { Component } from 'react'
import './processcolumn.css'
import MiniBox from '../Minibox/MiniBox';
import LeftTitle from '../Title/LeftTitle';
import QuestionCard from '../Card/QuestionCard';

//arrow
import { FaChevronRight, FaChevronLeft, FaChevronDown } from 'react-icons/fa';


export default class ProcessColumn extends Component {
    render() {
        return (
            <section className='column-wrapper-mirror'>
                <div className='left-column-process'>
                    <div>
                        <LeftTitle
                            text={this.props.mainTitle}
                            />
                        <div className="left-column-process__text">
                            {this.props.mainText}
                        </div>
                    </div>
                    <QuestionCard
                        tag= {this.props.questionTag}
                        text= {this.props.questionText}
                        />
                </div>
                <div className='right-column-process'>
                    <MiniBox
                        img={this.props.imgs1}
                        height={this.props.height1}
                        width = {this.props.width1}
                        text={this.props.text1}
                        text2={this.props.text21}
                        />
                    <div className="arrow-right">
                        <FaChevronRight/>
                    </div>
                    <MiniBox
                        img={this.props.imgs2}
                        height={this.props.height2}
                        width = {this.props.width2}
                        alt= {this.props.alt2}
                        text={this.props.text2}
                        />
                    <div className="arrow-right">
                        <FaChevronRight/>
                    </div>
                    <MiniBox
                        img={this.props.imgs3}
                        height={this.props.height3}
                        width = {this.props.width3}
                        alt= {this.props.alt3}
                        text={this.props.text3}
                        />
                    <div className="arrow-wrapper">
                        <div className="arrow-down-empty"></div>
                        <div className="arrow-right-empty"></div>
                        <div className="arrow-down-empty"></div>
                        <div className="arrow-right-empty"></div>
                        <div className="arrow-down">
                            <FaChevronDown/>
                        </div>
                    </div>
                    <MiniBox
                        img={this.props.imgs4}
                        height={this.props.height4}
                        width = {this.props.width4}
                        alt= {this.props.alt4}
                        text2={this.props.text4}
                        />
                    <div className="arrow-left">
                        <FaChevronLeft/>
                    </div>
                    <MiniBox
                        img={this.props.imgs5}
                        height={this.props.height5}
                        width = {this.props.width5}
                        alt= {this.props.alt5}
                        text2={this.props.text5}
                        />
                    <div className="arrow-left">
                        <FaChevronLeft/>
                    </div>
                    <MiniBox
                        img={this.props.imgs6}
                        height={this.props.height6}
                        width = {this.props.width6}
                        alt= {this.props.alt6}
                        text2={this.props.text6}
                        />
                    <div className="arrow-wrapper">
                        <div className="arrow-down">
                            <FaChevronDown/>
                        </div>
                        <div className="arrow-right-empty"></div>
                        <div className="arrow-down-empty"></div>
                        <div className="arrow-right-empty"></div>
                        <div className="arrow-down-empty"></div>
                    </div>
                    <MiniBox
                        img={this.props.imgs7}
                        height={this.props.height7}
                        width = {this.props.width7}
                        alt= {this.props.alt7}
                        text2={this.props.text7}
                        />
                    <div className="arrow-right">
                        <FaChevronRight/>
                    </div>
                    <MiniBox
                        img={this.props.imgs8}
                        height={this.props.height8}
                        width = {this.props.width8}
                        alt= {this.props.alt8}
                        text2={this.props.text8}
                        />
                    <div className="arrow-right">
                        <FaChevronRight/>
                    </div>
                    <MiniBox
                        img={this.props.imgs9}
                        height={this.props.height9}
                        width = {this.props.width9}
                        alt= {this.props.alt9}
                        text2={this.props.text9}
                        />
                    <div className="arrow-wrapper">
                        <div className="arrow-down-empty"></div>
                        <div className="arrow-right-empty"></div>
                        <div className="arrow-down-empty"></div>
                        <div className="arrow-right-empty"></div>
                        <div className="arrow-down">
                            <FaChevronDown/>
                        </div>
                    </div>
                    <div className="arrow-down-empty"></div>
                    <div className="arrow-right-empty"></div>
                    <div className="arrow-down-empty"></div>
                    <div className="arrow-right-empty"></div>
                    <MiniBox
                        img={this.props.imgs10}
                        height={this.props.height10}
                        width = {this.props.width10}
                        alt= {this.props.alt10}
                        text2={this.props.text10}
                        />
                </div>
            </section>
        )
    }
}
