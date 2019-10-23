import React from 'react'
import './righttitle.css';

const RightTitle = props => (
    <div
        className='right-title'>
            <h2>{props.text}</h2>
    </div>
);

export default RightTitle;