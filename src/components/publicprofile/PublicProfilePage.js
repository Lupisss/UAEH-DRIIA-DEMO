import React, {Component} from 'react';
import {ProfileComponent} from "../profile/ProfileComponent";

export default class PublicProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ProfileComponent publicProfile />
            </div>
        );
    }
}