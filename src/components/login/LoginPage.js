import React, {Component} from "react";
import {LoginComponent} from "./LoginComponent";
import {connect} from 'react-redux';
import {logIn, isLogged} from '../../redux/actions/userActions';
import toastr from 'toastr';
import "../singup/SignupStylesheet.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                username: ''
            }
        };
    }

    componentWillMount() {
        if (isLogged()) {
            toastr.warning('Ya tienes una sesión activa');
            this.props.history.push('/')
        }
    }

    handleChange = event => {
        let user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({
            user
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let user = Object.assign({}, this.state.user);
        user.username = user.email;
        this.props.logIn(user)
            .then(r => {
                toastr.success('Bienvenido');
                this.props.history.push('/profile');
            }).catch(e => {
            for (let key in e.data) {
                toastr.error(e.data[key][0]);
            }
        });
    };

    render() {
        return (
            <div className="Main-login">
                <LoginComponent
                    user={this.state.user}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({userLogged: Object.keys(state.user.info).length > 0});

LoginPage = connect(mapStateToProps, {logIn})(LoginPage);
export default LoginPage;