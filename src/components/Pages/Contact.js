import React, { Component } from 'react'
import DuoColumn from '../Column/DuoColumn'
import './contact.css'

import MapModal from '../Map/MapModal';

export default class Contact extends Component {
    render() {
        return (
            <DuoColumn
                    leftTitle="Contact Us"
                    leftText1="We'd love to answer your curiosity. If you have some question to ask, please click the link below to chat our customer service :"
                    leftText2="Or send us your lovely e-mail to :"
                    rightTitle="Official Stores"
                    rightText1= "Kedai Kopi Siliwangi"
                    rightText2= "Jl. Laswi No. 1A, Kacapiring, Batununggal, Bandung, Jawa Barat, Indonesia."
                    rightText3= "Maps :"
                    >
                        <MapModal/>
                        <div className="maptext">Zoom</div>
            </DuoColumn>
        )
    }
}
