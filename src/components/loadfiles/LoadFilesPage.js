import React, {Component} from "react";
import {LoadFilesComponent} from "./LoadFilesComponent";
import "./LoadFileStylesheet.css";

class LoadFilesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Main-takepart">
                <LoadFilesComponent/>
            </div>
        );
    }
}
export default LoadFilesPage;