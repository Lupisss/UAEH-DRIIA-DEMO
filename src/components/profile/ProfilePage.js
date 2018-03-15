import React, {Component,Fragment} from 'react';
import './ProfileStylesheet.css';
import Portada from './PortadaContainer';
import {PersonalInformationForm as PersonalInformation}  from './PersonalInformationForm';
import AddressInfo from './AddressInfoContainer';
import TutorInfo from './TutorInfoContainer';
import AcademicInfo from './AcademicInfoContainer';
import LangInfo from './LangInfoContainer';
import {connect} from 'react-redux';
import moment from 'moment';
import {updateProfile} from '../../redux/actions/userActions';
import {MainLoader} from '../loader/Loader';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                birth_date: "1995-09-29",
                ssn_expiry_date: "1995-09-29"
            },
            user: {}
        };
    }

    componentWillReceiveProps(nP){
        this.setState({profile:nP.profile,user:nP.user});
    }

    handleProfileChange = e => {
        let profile = Object.assign({},this.state.profile);
        profile[e.target.name] = e.target.value;
        this.setState({profile});
    };

    handleUserChange = e => {
        let user = Object.assign({},this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({user});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateProfile(this.state.profile)
            .then(r => {
                console.log(r);
            }).catch(e => {
                console.log(e);
        });
    };

    render() {
        const {fetched} = this.props;
        const {user = {}, profile = {birth_date: "1995-09-29", ssn_expiry_date: "1995-09-29"}} = this.state;
        let birth_date = {};
        let ssn_expiry_date = {};
        if (fetched) {
            birth_date = moment(profile.birth_date, "YYYY-MM-DD").toDate();
            ssn_expiry_date = moment(profile.ssn_expiry_date, "YYYY-MM-DD").toDate();
        }
        return (
            <Fragment>
                {
                    !fetched ? <MainLoader/> :
                        <Fragment>
                            <Portada/>
                            {/*Formularios del perfil*/}
                            <div className="Profile-form">
                                <PersonalInformation
                                    user={user}
                                    profile={profile}
                                    birth_date={birth_date}
                                    ssn_expiry_date={ssn_expiry_date}
                                    handleProfileChange={this.handleProfileChange}
                                    handleUserChange={this.handleUserChange}
                                    onSubmit={this.handleSubmit}
                                />
                                <AddressInfo/>
                                <TutorInfo/>
                                <AcademicInfo/>
                                <LangInfo/>
                            </div>
                        </Fragment>
                }
            </Fragment>
        );
    }
}

// const styles = {
//     item:{
//         boxSizing:'border-box',
//         margin: '0px 20px'
//     }
// };
const mapStateToProps = (state, ownProps) => ({
    user: state.user.info,
    profile: state.user.info.profile,
    fetched: state.user.isFetched
});

ProfilePage = connect(mapStateToProps, {updateProfile})(ProfilePage);
export default ProfilePage;