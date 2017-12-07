import React, {Component} from 'react';
import './About.css';
import FontAwesome from 'react-fontawesome';
import iphone from '../../../assets/phone.png';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="fx space">
                    <div className="process borde">
                        <FontAwesome name='cloud-download' className='icon_about' size='3x'/>
                        <h3 >Descarga</h3>
                        <p>Descarga nuestra aplicación móvil </p>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='hand-pointer-o' className='icon_about' size='3x'/>
                        <h3>Haz tu pedido</h3>
                        <p>Pide todo lo que necesitas</p>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='credit-card' className='icon_about' size='3x'/>
                        <h3>Paga</h3>
                        <p>Paga con tarjeta de forma segura </p>
                    </div>
                    <div className="process borde_left">
                        <FontAwesome name='shopping-bag' className='icon_about' size='3x'/>
                        <h3>Recibe</h3>
                        <p>Recibe tu pedido</p>
                    </div>
                </div>
                <div className="nos">
                    <div className="fx largo">
                        <div className="info">
                            <h2>¿Falta algo en tu casa?<br/> Agrégalo ahora</h2>
                            <p>Encuentra todos los productos que quieres, recibelos con la rapidez que necesitas y con el mejor servicio</p>
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