import React, {Component} from "react";
import {LoginComponent} from "./LoginComponent";
import firebase from "../../firebase";
import "../singup/SignupStylesheet.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                email:'',
                password:'',

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
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then ((snap) => { console.log("Ya entré", snap)})
            .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ...
        });



    };


    render() {
        return (
            <div className="Main-login">
                <LoginComponent user={this.state.user} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LoginPage;