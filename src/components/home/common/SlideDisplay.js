import React from 'react';
import './Slide.css';
//import logo from '../../../assets/uaehh.png';
import {RaisedButton} from 'material-ui';
import {Link} from "react-router-dom";


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
                        <h2>Universidad Autónoma del Estado de Hidalgo</h2>
                        <br/>
                        <p className="text">
                            Dirección de Relaciones Internacionales e Intercambio Académico
                        </p>
                        <br/>
                        <Link to="/signup">
                        <RaisedButton  label="Registro" primary={true} type="submit" />
                        </Link>
                        <br/>
                        <p className="aviso">Necesitas ayuda? <a href="mailto:lupiz_1810@hotmail.com" className="contacto"> Contáctanos </a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
