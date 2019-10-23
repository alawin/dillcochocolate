import React, { Component } from 'react'
import ProductCard from '../Card/ProductCard';

// css
import './products.css';

// images
import srawana from "../../images/Products/srawana.webp"
import kamarasa from '../../images/Products/kamarasa.webp'
import andalas from '../../images/Products/andalas.webp'
import celebes from '../../images/Products/celebes.webp'

// background art
import java from '../../images/Products/Java.webp'
import bali from '../../images/Products/Bali.webp'
import sumatra from '../../images/Products/Sumatra.webp'
import sulawesi from '../../images/Products/Sulawesi.webp'

// component
import NormalTitle from '../Title/NormalTitle';
import QuestionCard from '../Card/QuestionCard';


export default class Products extends Component {
    state = {
        products: [
            {
            cardColor: 'rgb(163, 91, 54)',
            img: srawana,
            imgAlt: 'java srawana packaging',
            topTitle: 'java',
            bottomTitle: 'srawana',
            text: "Java Srawana comes from some farms in West Java, Indonesia. With high intensity of fruitiness and sweetness. Java Srawana offers unique flavors of chocolate you might haven't tasted before",
            grams1: '1000g',
            grams2: '300g',
            bgArt: java,
            bgAlt: 'Java Srawana background art',
            bgArtHeight: '15rem',
            },
            {
            cardColor: 'rgb(78, 102, 102)',
            img: kamarasa,
            imgAlt: 'bali kamarasa packaging',
            topTitle: 'bali',
            bottomTitle: 'kamarasa',
            text: 'Bali Kamarasa comes from one of the most famous island in Indonesia, which definitely is Bali. With refreshing nutty and fruity flavours. Bali Kamarasa will suit best for you who is looking for light and smooth flavours of chocolate',
            grams1: '1000g',
            grams2: '300g',
            bgArt: bali,
            bgAlt: 'Bali Kamarasa background art',
            bgArtHeight: '18rem'
            },
            {
            cardColor: 'rgb(150, 98, 47)',
            img: andalas,
            imgAlt: 'Sumatera Andalas packaging',
            topTitle: 'sumatera',
            bottomTitle: 'andalas',
            text: "Sumatera Andalas is chocolate blends coming from farms in West Sumatra and Aceh region, Indonesia. Sumatera Andalas has a bolder taste, long sweet aftertaste with some fruity flavors.Sumatera Andalas is the right choice for you who seeks 'stronger' taste of chocolate",
            grams1: '1000g',
            grams2: '300g',
            bgArt: sumatra,
            bgAlt: 'Sumatera Andalas background art',
            bgArtHeight: '16rem'
            },
            {
            cardColor: 'rgb(155, 52, 52)',
            img: celebes,
            imgAlt: 'Sulawesi Celebes packaging',
            topTitle: 'Sulawesi',
            bottomTitle: 'Celebes',
            text: 'Sulawesi Celebes comes from the most east region of our collection, Sulawesi Island, Indonesia. It has a little bold and sweet taste, with creamy aftertaste in the end. Sulawesi Celebes is the right choice for you guys who wants a quite bold and creamy chocolate flavours',
            grams1: '1000g',
            grams2: '300g',
            bgArt: sulawesi,
            bgAlt: 'Sulawesi Celebes background art',
            bgArtHeight: '13rem'
            },
        ]
    }

    render() {
        return (
            <div className="product">
                <div className="product-left" >
                    {this.state.products.map((product, id) => {
                        return <ProductCard key={id}
                            cardColor= {product.cardColor}
                            img= {product.img}
                            imgAlt= {product.imgAlt}
                            topTitle= {product.topTitle}
                            bottomTitle= {product.bottomTitle}
                            text= {product.text}
                            grams1= {product.grams1}
                            grams2= {product.grams2}
                            bgArt= {product.bgArt}
                            bgAlt= {product.bgAlt}
                            bgArtHeight= {product.bgArtHeight}
                            />
                    })}
                </div>
                <div className="product-right">
                    <NormalTitle text='Products'/>
                    <QuestionCard
                            tag='What is the taste of cocoa nibs?'
                            text='These have a nutty taste with a bitter aftertaste and the same floral taste found in the pulp but stronger. Very fine cacao varieties have low bitterness levels and one can also taste the chocolate, much like the flavor of unsweetened baking chocolate'
                            textAlign= 'right'
                            alignSelf='flex-end'

                    />
                </div>
            </div>
        )
    }
}
