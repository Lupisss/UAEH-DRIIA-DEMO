import React, {Component} from 'react';
import {TakePartComponent} from "./TakePartComponent";
import './TakePartStylesheet.css';

class TakePartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Main-takepart">
                <TakePartComponent/>
            </div>
        );
    }
}

export default TakePartPage;