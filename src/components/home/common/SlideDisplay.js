import React from 'react';
import './Slide.css';
import logo from '../../../assets/shopyy.png';

export const SlideDisplay = () => {
    return (
        <div className="slide">
            <div className="cover">
                <div className="descript">
                    <img  src={logo} alt=""/>
                    <div className="slogan">
                        <h2>Haz tu super sin salir de casa</h2>
                        <p className="text">
                            Entregamos tu pedido en 2 horas
                        </p>
                        <button className="btn">Registro</button>
                        <p className="aviso">Necesitas ayuda? Contáctanos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
