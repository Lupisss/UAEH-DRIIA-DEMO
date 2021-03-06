import React, {Component} from "react";
import {SignupComponent} from "./SignupComponent";
import {connect} from 'react-redux';
import "./SignupStylesheet.css";
import {isLogged, signUp} from '../../redux/actions/userActions';
import toastr from 'toastr';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                given_name:'',
                surname:'',
                email:'',
                password:'',
                password2:''
            },
            signupSuccess: false,
            errors: {

            }
        };
    }

    componentWillMount() {
        if (isLogged()) {
            toastr.warning('Ya tienes una sesión activa');
            this.props.history.push('/')
        }
    }

    handleChange = (event) => {
        let user = this.state.user;
        user[event.target.name]=event.target.value;
        this.validate(event.target.name, event.target.value);
        this.setState({
            user
        });
    };
//validación de los campos de registro de usuario
    validate = (name, value) => {
        const {errors, user:{password,password2}} = this.state;
        switch (name) {
            case 'password':
                if(value.trim().length < 8 )
                    errors['password'] = 'La contraseña debe ser mayor a 8 caracteres';
                else
                    delete errors['password'];
                if(value.trim() !== password2)
                    errors['password2'] = 'La contraseña no coincide';
                else
                    delete errors['password2'];
                break;
            case 'password2':
                if(value.trim() !== password)
                    errors['password2'] =   'La contraseña no coincide';
                else
                    delete errors['password2'];
                break;
            default:
        }
        this.setState({errors});
    };

    handleSubmit =(event) => {
        event.preventDefault();
        const {email,password,password2, given_name, surname} = this.state.user;
        let user = {};
        user.email = user.username = email;
        user.password1 = password;
        user.password2 = password2;
        user.given_name = given_name;
        user.surname = surname;
        console.log(user);
        this.props.signUp(user)
            .then( r => {
                toastr.success('Registrado');
                this.props.history.push('/profile');
                console.log('Se supone que soy el usuario',r);
            })
            .catch( e => {
                toastr.error(e);
                console.error(e);
            });
    };

    handleRequestClose = () => {
        this.setState({signupSuccess:false});
    };

    render() {
        const {errors} = this.state;
        return (
            <div className="Main-signup">
                <SignupComponent errors={errors} user={this.state.user} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

SignupPage = connect(mapStateToProps, {signUp}) (SignupPage);
export default SignupPage;