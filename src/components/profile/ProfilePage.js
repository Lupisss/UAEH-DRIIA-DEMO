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

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {

            }
        };
    }

    render() {
        const {user = {},profile = { birth_date: "1995-09-29", ssn_expiry_date: "1995-09-29"}} = this.props;
        let birth_date = moment(profile.birth_date, "YYYY-MM-DD").toDate();
        let ssn_expiry_date = moment(profile.ssn_expiry_date, "YYYY-MM-DD").toDate();
        return (
            <Fragment>
                    <Portada/>
                    {/*Formularios del perfil*/}
                    <div className="Profile-form">
                        <PersonalInformation
                            user={user}
                            profile={profile}
                            birth_date={birth_date}
                            ssn_expiry_date={ssn_expiry_date}
                        />
                        <AddressInfo/>
                        <TutorInfo/>
                        <AcademicInfo/>
                        <LangInfo/>
                    </div>
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
    profile: state.user.info.profile
});

ProfilePage = connect(mapStateToProps, {})(ProfilePage);
export default ProfilePage;