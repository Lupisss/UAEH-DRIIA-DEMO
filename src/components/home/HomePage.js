import React from "react";
import {HomeComponent} from "./HomeComponent";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    //Renderiza a HomeComponent
    render(){
        return (
            <div>
                <HomeComponent/>
            </div>
        );
    }
}

export default HomePage;
