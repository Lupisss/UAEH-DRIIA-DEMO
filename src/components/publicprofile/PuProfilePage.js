import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {PuProfileComponent} from "./PuProfileComponent";
import {MainLoader} from '../loader/Loader';


class PuProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /* TODO
    *   Arreglar información
    *   Hacer que se vea más bonito
    *   Quitar campos que no estan completos
    */
    render() {
        const {fetched, profile, user, tutor} = this.props;
        console.log('3456789kihugyftdfcghjkug', tutor);
        return (
            !fetched ? <MainLoader/> :
                <Fragment>
                    <PuProfileComponent
                        profile={profile}
                        user={user}
                        tutor={tutor}
                        addresses={profile.addresses}
                        certifications={profile.certifications}
                    />
                </Fragment>
        );
    }
}


const tutorBlank = {
    full_name: "",
    address: [],
    relationship: "",
    email: "",
    phone_number: "",
    cellphone_number: ""
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const profile = state.profiles.list.filter(profile => profile.id == id)[0];
    let profileCopy = {};
    if (profile) {
        profileCopy = JSON.parse(JSON.stringify(profile));
    }
    return {
        user: profileCopy.user,
        profile: profileCopy,
        tutor: profileCopy.tutor ? profileCopy.tutor : tutorBlank,
        fetched: state.profiles.areFetched
    }
};

PuProfilePage = connect(mapStateToProps)(PuProfilePage);
export default PuProfilePage;