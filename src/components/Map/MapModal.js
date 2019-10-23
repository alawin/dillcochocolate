import React, { Component } from 'react';

import './mapmodal.css'
//map
import dillcoMap from '../../images/Map/DillcoMap.webp';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

export default class MapModal extends Component {
    state = {
        mapOpen: false,
    };

    mapOpenClickHandler = () => {
        this.setState((prevState) => {
        return {mapOpen: true};
        });
    };

    mapCloseClickHandler = () => {
        this.setState((prevState) => {
            return {mapOpen: !prevState.mapOpen};
        });
    }

    render() {
        let mapClasses = ['map-wrapper'];
        if (this.state.mapOpen !== false) {
            mapClasses = ['map-wrapper open'];
        }

            return (
                <div className={mapClasses} >
                    <LazyLoad
                                debounce={false}
                                offsetVertical={500}
                                throttle={250}
                                once={true}
                                >
                            <div className="map" onClick={this.mapOpenClickHandler}>
                                <img
                                src={dillcoMap}
                                alt="dillco static map"
                                />
                        </div>
                    </LazyLoad>
                    <a
                        className="marker"
                        href="https://www.google.com/maps/place/Kedai+Kopi+Siliwangi/@-6.9161634,107.6286387,17.5z/data=!4m5!3m4!1s0x2e68e7cfcb499e45:0x16e0aad8b89ca76d!8m2!3d-6.9159679!4d107.6304197"
                        target='_blank'
                        rel="noopener noreferrer"
                        >
                        <FaMapMarkerAlt/>
                        <div className="location-text">
                            Kedai Kopi Siliwangi
                        </div>
                    </a>
                    <div className="close-map-button" onClick={this.mapCloseClickHandler}>Close<FaTimes/></div>
                </div>
            )
        }
    }
