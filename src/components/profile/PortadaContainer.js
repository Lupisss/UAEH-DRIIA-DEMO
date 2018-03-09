import React, {Component} from "react";
import {PortadaDisplay} from './PortadaDisplay';

class PortadaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <PortadaDisplay/>
        );
    }
}

export default PortadaContainer;