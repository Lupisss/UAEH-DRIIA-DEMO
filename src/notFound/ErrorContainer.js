import React, {Component} from "react";
import {Error} from "./Error";

class ErrorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{backgroundImage: "url('https://images.pexels.com/photos/157198/pexels-photo-157198.jpeg')", width:"100vw", height:"100vh", backgroundSize:"cover", display: "flex", justifyContent: "center"}}>
                <Error/>
            </div>
        );
    }
}

export default ErrorContainer;