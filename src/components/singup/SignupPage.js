import React, {Component} from "react";
import {SignupComponent} from "./SignupComponent";
import firebase from "../../firebase";
import "./SignupStylesheet.css";

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
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(r => {
                console.log("Ya me guardé" , r);
            })
            .catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ' due to ' + errorMessage );
        });

    };
    render() {
        return (
            <div className="Main-signup">
                <SignupComponent user={this.state.user} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default SignupPage;