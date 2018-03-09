import React, {Component} from 'react';
import {PersonalInformationForm} from './PersonalInformationForm'

class PersonalInformation extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <PersonalInformationForm/>
        );
    }
}

export default PersonalInformation;