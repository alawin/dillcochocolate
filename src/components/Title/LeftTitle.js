import React from 'react'
import './lefttitle.css';

const LeftTitle = props => (
    <div
        className='left-title'>
            <h2>{props.text}</h2>
    </div>
);

export default LeftTitle;
