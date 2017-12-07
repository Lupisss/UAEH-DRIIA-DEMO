import React, {Component} from 'react';
import './Info.css';
import FontAwesome from 'react-fontawesome';


class Info extends Component {
    render() {
        return (
            <div className="informacion">
                <div className="box_info">
                    <FontAwesome name='check' className='icon_about' size='3x'/>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className="p">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    <br/>
                    <p className="ask"> <FontAwesome name='phone' className='icon_about' size='1x'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                    <p className="ask"> <FontAwesome name='clock-o' className='icon_about' size='1x'/>Lorem ipsum dolor sit amet, consectetur  </p>
                    <p className="ask"> <FontAwesome name='money' className='icon_about' size='1x'/>Lorem ipsum dolor sit amet, consectetur  </p>

                </div>
            </div>
        );
    }
}

export default Info;
