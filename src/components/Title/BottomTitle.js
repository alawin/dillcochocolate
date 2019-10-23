import React from 'react'
import './bottomtitle.css';

const BottomTitle = props => (
    <div
        className='bottom-title'>
            <h2>{props.text}</h2>
    </div>
);

export default BottomTitle;