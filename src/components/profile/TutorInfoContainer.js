import React, {Component} from "react";
import {TutorInfoForm} from './TutorInfoForm';

class TutorInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TutorInfoForm/>
        );
    }
}

export default TutorInfoContainer;