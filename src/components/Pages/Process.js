import React, { Component } from 'react';
import './process.css';

import ProcessColumn from '../Column/ProcessColumn';

//workflow
import Wf1 from '../../images/Workflow/Wf1.webp';
import Wf2 from '../../images/Workflow/Wf2.webp';
import Wf3 from '../../images/Workflow/Wf3.webp';
import Wf4 from '../../images/Workflow/Wf4.webp';
import Wf5 from '../../images/Workflow/Wf5.webp';
import Wf6 from '../../images/Workflow/Wf6.webp';
import Wf7 from '../../images/Workflow/Wf7.webp';
import Wf8 from '../../images/Workflow/Wf8.webp';
import Wf9 from '../../images/Workflow/Wf9.webp';
import Wf10 from '../../images/Workflow/Wf10.webp';


export default class Process extends Component {
    render() {
        return (
            <ProcessColumn
                mainTitle='Processing'
                mainText='We believe that good products come from a good cultivation. Dillco Chocolate always makes sure that our Cocoa beans come from a well-controlled, managed, and prepared source in order to have the best resulting chocolate you could enjoy anywhere'

                questionTag='What colors do cocoa pod have?'
                questionText='Immature cocoa have a variety of colors, but most of it are green, red, and purple. As they mature, their color turns yellow or orange, particularly in the creases'

                imgs1= {Wf1}
                width1= "10vw"
                height= "9vw "
                text1="Training"
                text21="(Plantation & Post - Harvest)"

                imgs2= {Wf2}
                width2= "8vw "
                height2= "8vw "
                text2="Harvesting"

                imgs3= {Wf3}
                width3= "11vw "
                height3= "11vw "
                text3="Curing"

                imgs6= {Wf4}
                width6= "6vw "
                height6= "6vw "
                text6="Pod Breaking"

                imgs5= {Wf5}
                width5= "7vw "
                height5= "5vw "
                text5="Fermentation"

                imgs4= {Wf6}
                width4= "8vw"
                height4= "7vw "
                text4="Pre - Drying"

                imgs7= {Wf7}
                width7= "11vw"
                height7= "7vw "
                text7="Sun-Drying"

                imgs8= {Wf8}
                width8= "5vw "
                height8= "7vw "
                text8="Sorting"

                imgs9= {Wf9}
                width9= "6vw "
                height9= "6.5vw "
                text9="High Quality Beans"

                imgs10= {Wf10}
                width10= "7vw "
                height10= "7vw "
                text10="Social Impact (Farmers)"
                />
        )
    }
}
