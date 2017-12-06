import React, {Component} from 'react';
import {AdminComponent} from "./AdminComponent";

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AdminComponent/>
            </div>
        );
    }
}

export default AdminPage;