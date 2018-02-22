import React, {Component} from "react";
import {NavBarComponent} from "./NavBarComponent";
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions/userActions';

class NavBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logOut = () => {
        this.props.logOut()
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.log(e);
            });

    };

    render() {

        return (
            <div>
                <NavBarComponent
                    logOut={this.logOut}
                />
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => ({

});

NavBarContainer = connect(mapStateToProps,{logOut})(NavBarContainer);
export default NavBarContainer;