import React, {Component} from "react";
import {LoginComponent} from "./LoginComponent";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <LoginComponent/>
            </div>
        );
    }
}

export default LoginPage;