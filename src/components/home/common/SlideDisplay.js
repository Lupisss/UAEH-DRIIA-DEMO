import React from 'react';
import './Slide.css';
import logo from '../../../assets/uaehh.png';
import {RaisedButton} from 'material-ui';

export const SlideDisplay = () => {
    return (
        <div className="slide">
            <div className="cover">
                <div className="descript">

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
