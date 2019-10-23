import React from 'react';
import './mobilenavbutton.css';

const MobileNavButton = props => (
    <button className='mobilenav-button' onClick={props.click}>
        <div className='mobilenav-button__line'></div>
        <div className='mobilenav-button__line'></div>
        <div className='mobilenav-button__line'></div>
        <div className='mobilenav-button__line'></div>
    </button>

);

export default MobileNavButton;