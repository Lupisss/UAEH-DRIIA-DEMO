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
                        <FontAwesome name='hand-pointer-o' className='icon_about' size='3x'/>
                        <h3 >Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='hand-pointer-o' className='icon_about' size='3x'/>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <div className="process borde">
                        <FontAwesome name='hand-pointer-o' className='icon_about' size='3x'/>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit </p>
                    </div>
                    <div className="process borde_left">
                        <FontAwesome name='hand-pointer-o' className='icon_about' size='3x'/>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                </div>
                <div className="nos">
                    <div className="fx largo">
                        <div className="info">

                            {/* Pagina principal abajo de la pagina principal*/}
                            <h2>Lorem ipsum dolor sit amet, consectetur<br/> Lorem ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
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