import React, {Component} from 'react';
import {ChooseSubjectsComponent} from "./ChooseSubjectsComponent";
import {isLogged} from '../../redux/actions/userActions';
import toastr from 'toastr';

class ChooseSubjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        if (!isLogged()) {
            toastr.warning('Debe iniciar sesión');
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>
                <ChooseSubjectsComponent/>
            </div>
        );
    }
}

export default ChooseSubjectsPage;