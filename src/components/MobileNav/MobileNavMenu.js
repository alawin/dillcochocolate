import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

//css
import './mobilenavmenu.css';

import FollowUs from '../SocialNetwork/FollowUs';

//logo
import LogoNoIcon from '../../images/Logo/LogoDillcoNoIcon.webp'
import ImageLoader from '../LazyLoader/ImageLoader';


export default class MobileNavMenu extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render () {
        let mobilenavClasses = ['mobilenav'];
        if (this.props.show) {
            mobilenavClasses = ['mobilenav open']
        }
        return (
        <div className={mobilenavClasses}>
            <div className='mobilenav-logo' onClick={this.scrollToTop}>
                    <ImageLoader src={LogoNoIcon} alt="Logo Text Dillco Chocolate"/>
            </div>
            <FollowUs />
            <div className='mobilenav-menu'>
                <ul>
                    <li>
                        <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='mobilenav-menu-item'>About
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='mobilenav-menu-item'>Processing
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='mobilenav-menu-item'>Journey
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='mobilenav-menu-item'>Products
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass="active"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='mobilenav-menu-item'>Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
};
