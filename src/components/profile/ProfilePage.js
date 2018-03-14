import React, {Component,Fragment} from 'react';
import './ProfileStylesheet.css';
import Portada from './PortadaContainer';
import PersonalInformation from './PersonalInformationContainer';
import AddressInfo from './AddressInfoContainer';
import TutorInfo from './TutorInfoContainer';
import AcademicInfo from './AcademicInfoContainer';
import LangInfo from './LangInfoContainer';
import {connect} from 'react-redux';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Fragment>
                    <Portada/>
                    {/*Formularios del perfil*/}
                    <div className="Profile-form">
                        <PersonalInformation/>
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

});

ProfilePage = connect(mapStateToProps, {})(ProfilePage);
export default ProfilePage;