import React, {Component} from "react";
import {SignupComponent} from "./SignupComponent";
import {connect} from 'react-redux';
import "./SignupStylesheet.css";
import {signin} from '../../redux/actions/userActions';
import {Snackbar} from "material-ui";
import toastr from 'toastr';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                name:'',
                lastName:'',
                email:'',
                password:'',
                password2:''
            }, signupSuccess: false

        };
    }
    handleChange = (event) => {
        let user = this.state.user;
        user[event.target.name]=event.target.value;
        this.setState({
            user
        });
    };
    handleSubmit =(event) => {
        event.preventDefault();
        let user = this.state.user;
        this.props.signin(user)
            .then( s => {
                toastr.success('Registrado');
                this.props.history.push('/profile');
            })
            .catch( e => {
                console.error(e);
            });
    };

    handleRequestClose = () => {
        this.setState({signupSuccess:false});
    };

    render() {
        const {signupSuccess} = this.state;
        return (
            <div className="Main-signup">
                <SignupComponent user={this.state.user} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                <Snackbar
                    open={signupSuccess}
                    message="Cuenta registrada exitosamente"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

SignupPage = connect(mapStateToProps, {signin}) (SignupPage);
export default SignupPage;