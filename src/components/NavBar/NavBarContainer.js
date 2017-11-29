import React, {Component} from "react";
import {NavBarComponent} from "./NavBarComponent";

class NavBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBarComponent/>
            </div>
        );
    }
}

export default NavBarContainer;