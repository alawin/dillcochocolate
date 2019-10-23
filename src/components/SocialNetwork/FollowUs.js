import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './followus.css'

const FollowUs = (props) => (
    <div className='follow-us'>
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
);

export default FollowUs;