import React, { Component } from 'react';
import "./journey.css";

import JourneyCardLeft from '../Card/JourneyCardLeft';
import JourneyCardRight from '../Card/JourneyCardRight';
import QuestionCard from '../Card/QuestionCard';

import journey1 from '../../images/Journey/01JavaSrawana.jpg';
import journey2 from '../../images/Journey/02BaliKamarasa.jpg';
import journey3 from '../../images/Journey/03SumateraAndalas.jpg'
import journey4 from '../../images/Journey/04SulawesiCelebes.jpg'


export default class Journey extends Component {
    render() {
        return (
            <div className="journey">
                <div className="journey-title"><h2>Journey</h2></div>
                <QuestionCard
                    tag = "How to know when the cacao pod is fully riped?"
                    textAlign = "right"
                    alignSelf= "flex-end"
                    text= "The pod starts out green and tuns orange when they're ripe. When the Pods are ripe, harvesters travel through the cocoa orchards with machetes and hack the pods gently off of the trees."
                />
                <div className="journey-timeline-wrapper">
                    <JourneyCardLeft
                        title= "Java Srawana"
                        titleColor= "rgb(290, 94, 43)"
                        img= {journey1}
                        alt="Java Srawana Dillco Chocolate"
                        year= "2015"
                        text= "In Hindu mythology, Srawana means dedication and also can be interpreted as 'the first season'. Java srawana is one of the representatives of DCI product variants from the hemisphere of Java Island, Indonesia. Java Srawana is the first product released by DCI as a concrete example of our dedication to produce superior quality chocolate from Indonesia." />
                    <JourneyCardRight
                        title= "Bali Kamarasa"
                        titleColor= "rgb(73, 243, 255)"
                        img= {journey2}
                        alt="Bali Kamarasa Dillco Chocolate"
                        year= "2017"
                        text= "In Sanskrit, Kamarasa means 'full of love'. Released in 2017, Bali Kamarasa is one of DCI's product variants representative from the hemisphere of Bali Island, Indonesia. With a fresh and soft characteristics, Bali Kamarasa offers a charming chocolate taste like the beauty of the Island. " />
                    <JourneyCardLeft
                        title= "Sumatera Andalas"
                        titleColor= "rgb(253, 198, 54)"
                        img= {journey3}
                        alt="Sumatera Andalas Dillco Chocolate"
                        year= "2016"
                        text= "Andalas is a term to describe 'mainland Sumatera' also commonly known as 'mainland Andalas'. Sumatera Andalas is one of DCI's product variants representative from the hemisphere of Sumatera Island, Indonesia. Sumatera Andalas was released shortly after Java Srawana in 2016. The strong and sweet characteristics of this chocolate illustrates the richness of nature and culture of the land." />
                    <JourneyCardRight
                        title= "Sulawesi Celebes"
                        titleColor= "rgb(247, 62, 59)"
                        img= {journey4}
                        alt="Sulawesi Celebes Dillco Chocolate"
                        year= "2016"
                        text= "Sulawesi Celebes is one of DCI's product variants representative from the hemisphere of Sulawesi Island, Indonesia. Which was released in 2016. Celebes is a word we picked based from Indonesian history about 'Jong Celebes', a sense of high unity and strong friendship similar to the Chocolate which has a firm, honest, and sweet characteristics"
                    />
                </div>
                <QuestionCard
                    tag = "What to know about Cocoa Fermentation?"
                    textAlign = "left"
                    text= "Yeast and microorganism starts working on the pulp, creating alchohol and generating heat. the temperature rises to 40°-45°C (104-113 °F) during the first 48 hours."
                />
            </div>
        )
    }
}
