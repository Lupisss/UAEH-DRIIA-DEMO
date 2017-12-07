import React, {Component} from 'react';
import './Btn.css';
import {Link} from 'react-router-dom';

class Btn extends Component {
    render() {
        return (
            <Link to="/">
                <button className="btn_buy">{this.props.text}</button>
            </Link>
        );
    }
}

export default Btn;
