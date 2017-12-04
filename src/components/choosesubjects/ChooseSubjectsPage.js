import React, {Component} from 'react';
import {ChooseSubjectsComponent} from "./ChooseSubjectsComponent";

class ChooseSubjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ChooseSubjectsComponent/>
            </div>
        );
    }
}

export default ChooseSubjectsPage;