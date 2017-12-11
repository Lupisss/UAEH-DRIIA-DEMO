import React, {Component} from 'react';
import {CVComponent} from "./CVComponent";

export default class CVPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <CVComponent/>
        );
    }
}