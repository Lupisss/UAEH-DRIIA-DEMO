import React, {Component} from 'react';
import './Categorias.css';
import FontAwesome from 'react-fontawesome';

class Categorias extends Component {
    render() {
        return (
            <div className=" space cat">
                <h2>Lorem ipsum </h2>
                <div className="fx">
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://static.pexels.com/photos/219014/pexels-photo-219014.jpeg)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                <p className='icon' ><FontAwesome name='shopping-basket' size='1x'/></p>
                                <span >Lorem ipsum </span></div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon' ><FontAwesome name='leaf' size='1x'/></p>
                                    <span >Lorem ipsum </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'https://static.pexels.com/photos/160483/hiker-traveler-trip-travel-160483.jpeg'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='glass'  size='1x'/></p>
                                    <span >Lorem ipsum </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://static.pexels.com/photos/335393/pexels-photo-335393.jpeg)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='map-pin'  size='1x'/></p>
                                    <span> Lorem ipsum </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://static.pexels.com/photos/297642/pexels-photo-297642.jpeg)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='medkit'  size='1x'/></p>
                                    <span> Lorem ipsum </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cd" style={{backgroundImage:'url(https://static.pexels.com/photos/247929/pexels-photo-247929.jpeg)'}}>
                            <div className="cubierta">
                                <div className="vino">
                                    <p className='icon'><FontAwesome name='magic'  size='1x'/></p>
                                    <span> Lorem ipsum </span>
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
