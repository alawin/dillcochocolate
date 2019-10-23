import React from 'react';
import LazyLoad from 'react-lazy-load';
import "./journeycardright.css";
import ImageLoader from '../LazyLoader/ImageLoader';

const JourneyCardRight = (props) => (
    <div className="journey-card-right">
        <h2 style={{color: `${props.titleColor}`}}>{props.title}</h2>
        <div className="journey-card-wrapper">
            <LazyLoad
                debounce={false}
                offsetVertical={500}
                throttle={250}
                >
                <ImageLoader src={props.img} alt={props.alt}/>
            </LazyLoad>
            <div className="journey-card-innerwrapper">
                <div className="journey-card-wrapper--year">{props.year}</div>
                <div className="journey-card-wrapper--text">{props.text}</div>
            </div>
        </div>
    </div>
);

export default JourneyCardRight;

