import React, {Component,Fragment} from 'react';
import './ProfileStylesheet.css';
import {PortadaDisplay as Portada} from './PortadaDisplay';
import {PersonalInformationForm as PersonalInformation}  from './PersonalInformationForm';
import AddressInfo from './AddressInfoContainer';
import TutorInfo from './TutorInfoContainer';
import AcademicInfo from './AcademicInfoContainer';
import LangInfo from './LangInfoContainer';
import {connect} from 'react-redux';
import moment from 'moment';
import {updateProfile} from '../../redux/actions/userActions';
import {MainLoader} from '../loader/Loader';
import {RaisedButton} from 'material-ui';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                birth_date: "1995-09-29",
                ssn_expiry_date: "1995-09-29"
            },
            user: {},
            birth_date: "1995-09-29",
            ssn_expiry_date: "1995-09-29"
        };
    }

    componentWillReceiveProps(nP){
        let birth_date = {};
        let ssn_expiry_date = {};
        if(nP.fetched) {
            birth_date = profile.birth_date ? moment(nP.profile.birth_date, "YYYY-MM-DD").toDate(): {};
            ssn_expiry_date = profile.ssn_expiry_date ? moment(nP.profile.ssn_expiry_date, "YYYY-MM-DD").toDate() : {};
            this.setState({
                profile: nP.profile,
                user: nP.user,
                birth_date:birth_date,
                ssn_expiry_date:ssn_expiry_date
            });
        }
    }

    handleProfileChange = e => {
        let profile = Object.assign({},this.state.profile);
        profile[e.target.name] = e.target.value;
        this.setState({profile});
    };

    handleDropDownChange = name => (event, index, value) => {
        let profile = Object.assign({},this.state.profile);
        profile[name] = value;
        this.setState({profile});
    };

    handleDatePickerChange = name => (event, date) => {
        let profile = Object.assign({},this.state.profile);
        profile[name] = moment(date).format("YYYY-MM-DD");
        this.setState({
            profile,
            [name]:date
        });
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
        const {user = {}, profile = {}, birth_date, ssn_expiry_date} = this.state;
        console.log(profile);
        return (
            <Fragment>
                {
                    !fetched ? <MainLoader/> :
                        <Fragment>
                            <Portada
                                profile={profile}
                            />
                            {/*Formularios del perfil*/}
                            <div className="Profile-form">
                                <PersonalInformation
                                    user={user}
                                    profile={profile}
                                    birth_date={birth_date}
                                    ssn_expiry_date={ssn_expiry_date}
                                    handleProfileChange={this.handleProfileChange}
                                    handleDropDownChange={this.handleDropDownChange}
                                    handleDatePickerChange={this.handleDatePickerChange}
                                    handleUserChange={this.handleUserChange}
                                    onSubmit={this.handleSubmit}
                                />
                                <AddressInfo/>
                                <TutorInfo/>
                                <AcademicInfo/>
                                <LangInfo/>
                                <div className="Paper-form" style={{padding:0}}>
                                    <div style={{width:'100%'}}>
                                        <RaisedButton
                                            type="submit"
                                            primary={true}
                                            label="Guardar cambios"
                                            fullWidth={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                }
            </Fragment>
        );
    }
}

const styles = {
    saveButton:{
        position:'fixed',
        bottom: 10,
        right: 0
    }
};
const mapStateToProps = (state, ownProps) => ({
    user: state.user.info,
    profile: state.user.info.profile,
    fetched: state.user.isFetched
});

ProfilePage = connect(mapStateToProps, {updateProfile})(ProfilePage);
export default ProfilePage;