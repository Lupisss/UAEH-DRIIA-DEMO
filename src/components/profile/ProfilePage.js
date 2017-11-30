import React, {Component} from 'react';
import {ProfileComponent} from "./ProfileComponent";
import './ProfileStylesheet.css';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Main-profile">
                <ProfileComponent/>
            </div>
        );
    }
}

export default ProfilePage;