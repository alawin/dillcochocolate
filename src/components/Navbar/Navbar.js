import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import classnames from "classnames";
import LazyLoad from 'react-lazy-load';

//css
import './navbar.css';

//logos and icons
import imgLogo from '../../images/Logo/LogoDillco.webp';
import MobileNavButton from '../MobileNav/MobileNavButton';
import { FaInstagram } from 'react-icons/fa';
import ImageLoader from '../LazyLoader/ImageLoader';


export default class Navbar extends Component {
    state = {
        isTop: true,
        };
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
            });
        }

    render() {
        return (
        <header >
            <nav className={classnames("navbar", {
            "false": !this.state.isTop
            })}>
                <div>
                    <MobileNavButton click={this.props.mobileClickHandler}/>
                </div>
                <div className='navbar-logo'>
                    <Link
                            activeClass="active"
                            to="section0" spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <LazyLoad
                                debounce={false}
                                offsetVertical={0}
                                throttle={50}
                                once={true}
                                >
                                <ImageLoader
                                    className="logo"
                                    src={imgLogo}
                                    alt="Dillco Logo"
                                />
                            </LazyLoad>
                    </Link>
                </div>
                <div className='navbar-items'>
                    <ul>
                        <li>
                            <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                Processing
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                Journey
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Products
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-items2'>
                    <ul>
                        <li>
                            <div className="follow">Follow Us</div>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/dillcochocolate/" target='_blank'
                                rel="noopener noreferrer"
                                className="icon"
                                >
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}

