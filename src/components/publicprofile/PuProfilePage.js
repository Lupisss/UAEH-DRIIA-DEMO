import React, {Component} from "react";
import {PuProfileComponent} from "./PuProfileComponent";


class PuProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <PuProfileComponent/>
            </div>
        );
    }
}

export default PuProfilePage;