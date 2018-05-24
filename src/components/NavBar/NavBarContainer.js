import React, {Component, Fragment} from "react";
import {NavBarComponent} from "./NavBarComponent";
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions/userActions';
import toastr from 'toastr';

class NavBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logOut = () => {
        this.props.logOut()
            .then(r => {
                toastr.warning('Hasta pronto');
            })
            .catch(e => {
                toastr.error('Algo salió mal');
                console.log(e);
            });

    };

    render() {
        const {user} = this.props;
        const userLogged = Object.keys(user).length > 0;
        return (
            <Fragment>
                <NavBarComponent
                    logOut={this.logOut}
                    user={user}
                    userLogged={userLogged}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state,ownProps) => ({
    user: state.user.info
});

NavBarContainer = connect(mapStateToProps,{logOut})(NavBarContainer);
export default NavBarContainer;