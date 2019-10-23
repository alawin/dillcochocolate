import React from 'react'
import './taglinecenter.css';

const TaglineCenter = props => (
    <div
        className='tagline-center'>
            <h2>{props.textTop}</h2>
            <h2>{props.textBottom}</h2>
    </div>
);

export default TaglineCenter
