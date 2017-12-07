import React, {Component} from 'react';
import './Categorias.css';
import FontAwesome from 'react-fontawesome';

class Categorias extends Component {
    render() {
        return (
            <div className=" space cat">
                <h2>Populares</h2>
                <div className="fx">
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/327173/pexels-photo-327173.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                <p className='icon' ><FontAwesome name='shopping-basket' size='1x'/></p>
                                <span >Abarrotes</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/302478/pexels-photo-302478.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon' ><FontAwesome name='leaf' size='1x'/></p>
                                    <span >Frutas y Verduras</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='glass'  size='1x'/></p>
                                    <span >Vinos y Licores</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/325526/pexels-photo-325526.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='map-pin'  size='1x'/></p>
                                    <span> Dulcería</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/33355/capsule-pill-health-medicine.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='medkit'  size='1x'/></p>
                                    <span> Farmacia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='magic'  size='1x'/></p>
                                    <span> Jarciería</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Categorias;
