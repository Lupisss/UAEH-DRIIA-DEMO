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
import toastr from 'toastr';
import scrollToComponent from 'react-scroll-to-component';

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
            ssn_expiry_date: "1995-09-29",
            profilePicture: {
                src: "",
                file: ""
            },
            wallPicture: {
                src: "",
                file: ""
            }
        };
    }

    componentWillReceiveProps(nP){
        let birth_date = {};
        let ssn_expiry_date = {};
        if(nP.fetched) {
            let profile = Object.assign({}, nP.profile);
            birth_date = profile.birth_date ? moment(nP.profile.birth_date, "YYYY-MM-DD").toDate(): {};
            ssn_expiry_date = profile.ssn_expiry_date ? moment(nP.profile.ssn_expiry_date, "YYYY-MM-DD").toDate() : {};
            this.setState({
                profile: profile,
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
        let profile = Object.assign({},this.state.profile);
        let profilePicture = Object.assign({},this.state.profilePicture);
        let wallPicture = Object.assign({},this.state.wallPicture);
        if(profilePicture.src === "") delete profile.profilePicture;
        if (wallPicture.src === "") delete profile.wallPicture;
        this.props.updateProfile(profile)
            .then(r => {
                toastr.success("Perfil actualizado");
                console.log(r);
            }).catch(e => {
                console.log(e);
            });

    };

    scrollToSave = () => {
        scrollToComponent(this.saveButton);
    };

    changePicture = name => e => {
        let profile = Object.assign({},this.state.profile);
        let pictureToChange = Object.assign({},this.state[name]);
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onload =  (e) => {
            pictureToChange.src = e.target.result;
            pictureToChange.file = file;
            profile[name] = pictureToChange.src;
            this.setState({profile, [name]:pictureToChange});
        };

        reader.readAsDataURL(file);
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
                                changePicture={this.changePicture}
                            />
                            {/*Formularios del perfil*/}
                            <form onSubmit={this.handleSubmit} className="Profile-form">
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
                                    scrollToSave={this.scrollToSave}
                                />
                                <AddressInfo/>
                                <TutorInfo/>
                                <AcademicInfo/>
                                <LangInfo/>
                                <div className="Paper-form" style={{padding:0}}>
                                    <div style={{width:'100%'}}>
                                        <RaisedButton
                                            ref={comp => this.saveButton = comp}
                                            type="submit"
                                            primary={true}
                                            label="Guardar cambios"
                                            fullWidth={true}
                                        />
                                    </div>
                                </div>
                            </form>
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