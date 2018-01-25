import React, {Component} from "react";
import {SignupComponent} from "./SignupComponent";
import {connect} from 'react-redux';
import "./SignupStylesheet.css";
import {signin} from '../../redux/actions/userActions';

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
           }
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
        this.props.signin(user);
    };
    render() {
        return (
            <div className="Main-signup">
                <SignupComponent user={this.state.user} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

SignupPage = connect(mapStateToProps, {signin}) (SignupPage);
export default SignupPage;