import React, {Component} from "react";
import {AcademicInfoForm} from './AcademicInfoForm'
class AcademicInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AcademicInfoForm/>
        );
    }
}

export default AcademicInfoContainer;