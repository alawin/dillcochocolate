import React from 'react';
import LazyLoad from 'react-lazy-load';
import './minibox.css';
import ImageLoader from '../LazyLoader/ImageLoader';

const MiniBox = (props) => (
    <div className="minibox">
        <div className="image-box">
        <LazyLoad
                debounce={false}
                offsetVertical={500}
                throttle={250}
                >
                <ImageLoader
                    src={props.img}
                    alt={props.alt}
                    style={{
                        width:`${props.width}`,
                        height:`${props.height}`
                        }}
                    >
                </ImageLoader>
        </LazyLoad>
        </div>
        <div className="texta">
            {props.text}
        </div>
        <div className="textb">
            {props.text2}
        </div>
    </div>
);

export default MiniBox;
