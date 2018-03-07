import React from 'react';
import './Slide.css';
//import logo from '../../../assets/uaehh.png';
import {RaisedButton} from 'material-ui';


//Texto y boton sobre imagen principal
export const SlideDisplay = () => {
    const video = require('../../../assets/mainvideo2.mp4');
    return (
        <div className="slide">
            <div className="cover">
                <div className="descript">
                    <video autoPlay muted loop id="myVideo">
                        <source src={video} type="video/mp4"/>
                    </video>

                    <div className="slogan">
                        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet
                        </p>
                        <RaisedButton  label="Registro" primary={true} type="submit" />
                        <p className="aviso">Necesitas ayuda? Contáctanos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
