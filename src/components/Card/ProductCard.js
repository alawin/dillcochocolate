import React from 'react'
import './product-card.css'
import LazyLoad from 'react-lazy-load';
import ImageLoader from '../LazyLoader/ImageLoader';

const ProductCard = (props) => {
    return (
        <div className='product-card' style={{background: `${props.cardColor}`}}>
            <div className="product-card-image">
                <LazyLoad
                    debounce={false}
                    offsetVertical={500}
                    throttle={250}
                    >
                    <ImageLoader src={props.img} alt={props.imgAlt}/>
                </LazyLoad>
            </div>
            <div className="product-card-content">
                <div className="product-card-titlewrapper">
                    <div className="product-card-title__top">{props.topTitle}</div>
                    <div className="product-card-title__bottom">{props.bottomTitle}</div>
                </div>
                <div className="product-card-text">{props.text}</div>
                <div className="product-card-details">
                    <p>Available in:</p>
                    <div className='product-card-details__grams'>
                        <p>{props.grams1}</p>
                        <p className='product-card-details__grams-items'>{props.grams2}</p>
                    </div>
                </div>
            </div>
            <LazyLoad
                    debounce={false}
                    offsetVertical={500}
                    throttle={250}
                    >
                        <ImageLoader
                            className="product-card-bgart"
                            src={props.bgArt}
                            alt={props.bgAlt}
                            style={{height: `${props.bgArtHeight}`}}
                            />
            </LazyLoad>
        </div>
    )
}

export default ProductCard