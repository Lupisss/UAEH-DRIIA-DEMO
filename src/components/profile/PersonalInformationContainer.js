import React, {Component} from 'react';
import {PersonalInformationForm} from './PersonalInformationForm'

class PersonalInformation extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        const {user, profile} = this.props;
        console.log(user, profile);
        return (
            <div></div>
        );
    }
}

export default PersonalInformation;