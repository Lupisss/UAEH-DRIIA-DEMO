import React, {Component} from "react";
import {LangInfoForm} from "./LangInfoForm";

class LangInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <LangInfoForm/>
        );
    }
}

export default LangInfoContainer;