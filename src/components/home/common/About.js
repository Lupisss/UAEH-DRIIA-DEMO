import React, {Component} from 'react';
import './About.css';
import FontAwesome from 'react-fontawesome';
import iphone from '../../../assets/1.png';

class About extends Component {
    render() {
        return (

            <div className="about">
                <div className="fx space">
                    <div className="process borde">
                        <FontAwesome name='laptop' className='icon_about' size='3x'/>
                        <h2>Visitas totales</h2>
                        <h3>+55,792</h3>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='plane' className='icon_about' size='3x'/>
                        <h2>Intercambios realizados</h2>
                        <h3>+800</h3>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='child' className='icon_about' size='3x'/>
                        <h2>Alumnos extranjeros recibidos</h2>
                        <h3>+500</h3>
                    </div>
                    <div className="process borde_left">
                        <FontAwesome name='heartbeat' className='icon_about' size='3x'/>
                        <h2>Alumnos felices</h2>
                        <h3>+100,000</h3>
                    </div>
                </div>
                <div className="nos">
                    <div className="fx largo">
                        <div className="info">

                            {/* Pagina principal abajo de la pagina principal*/}
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p >Nuestro objetivo es fortalecer y consolidar la internacionalización de la UAEH, mediante la movilidad educativa entrante y saliente a nivel nacional e internacional, del profesorado, alumnado y funcionariado</p>

                        </div>
                        <div className="infor">
                            <img src={iphone} alt=""/>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default About;