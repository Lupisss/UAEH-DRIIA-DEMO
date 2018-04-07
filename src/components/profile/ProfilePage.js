import React, {Component, Fragment} from 'react';
import './ProfileStylesheet.css';
import {PortadaDisplay as Portada} from './PortadaDisplay';
import {PersonalInformationForm as PersonalInformation} from './PersonalInformationForm';
import {AddressInfoComponent as AddressInfo} from './AddressInfoComponent';
import NewAddress from './AddressInfoContainer';
import {TutorInfoForm as TutorInfo} from "./TutorInfoForm";
import AcademicInfo from './AcademicInfoContainer';
import LangInfo from './LangInfoContainer';
import {connect} from 'react-redux';
import moment from 'moment';
import {updateProfile} from '../../redux/actions/userActions';
import {updateTutor} from '../../redux/actions/tutorActions';
import {MainLoader} from '../loader/Loader';
import {Drawer, FloatingActionButton, LinearProgress, MenuItem} from 'material-ui';
import IconButton from 'material-ui/svg-icons/content/save'
import toastr from 'toastr';
import scrollToComponent from 'react-scroll-to-component';
import {Route, Switch} from "react-router-dom";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                birth_date: "1995-09-29",
                ssn_expiry_date: "1995-09-29"
            },
            tutor: {},
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
            },
            loadingPictures: false
        };
    }

    componentWillMount() {
        let birth_date = {};
        let ssn_expiry_date = {};
        if (this.props.fetched) {
            let profile = Object.assign({}, this.props.profile);
            birth_date = profile.birth_date ? moment(this.props.profile.birth_date, "YYYY-MM-DD").toDate() : {};
            ssn_expiry_date = profile.ssn_expiry_date ? moment(this.props.profile.ssn_expiry_date, "YYYY-MM-DD").toDate() : {};
            this.setState({
                profile: profile,
                user: this.props.user,
                tutor: this.props.tutor,
                birth_date: birth_date,
                ssn_expiry_date: ssn_expiry_date
            });
        }
    }

    componentWillReceiveProps(nP) {
        let birth_date = {};
        let ssn_expiry_date = {};
        if (nP.fetched) {
            let profile = Object.assign({}, nP.profile);
            birth_date = profile.birth_date ? moment(nP.profile.birth_date, "YYYY-MM-DD").toDate() : {};
            ssn_expiry_date = profile.ssn_expiry_date ? moment(nP.profile.ssn_expiry_date, "YYYY-MM-DD").toDate() : {};
            this.setState({
                profile: profile,
                user: nP.user,
                tutor: nP.tutor,
                birth_date: birth_date,
                ssn_expiry_date: ssn_expiry_date
            });
        }
    }

    handleProfileChange = e => {
        let profile = Object.assign({}, this.state.profile);
        profile[e.target.name] = e.target.value;
        this.setState({profile});
    };

    handleTutorChange = e => {
        let tutor = Object.assign({}, this.state.tutor);
        tutor[e.target.name] = e.target.value;
        this.setState({tutor});
    };

    handleDropDownChange = name => (event, index, value) => {
        let profile = Object.assign({}, this.state.profile);
        profile[name] = value;
        this.setState({profile});
    };

    handleTutorDropDownChange = name => (event, index, value) => {
        let tutor = Object.assign({}, this.state.tutor);
        tutor[name] = value;
        this.setState({tutor});
    };

    handleDatePickerChange = name => (event, date) => {
        let profile = Object.assign({}, this.state.profile);
        profile[name] = moment(date).format("YYYY-MM-DD");
        this.setState({
            profile,
            [name]: date
        });
    };

    handleUserChange = e => {
        let user = Object.assign({}, this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({user});
    };

    handleSubmitProfile = e => {
        e.preventDefault();
        let profile = {...this.state.profile};
        let profilePicture = {...this.state.profilePicture};
        let wallPicture = {...this.state.wallPicture};
        if (profilePicture.src === "") delete profile.profilePicture;
        if (wallPicture.src === "") delete profile.wallPicture;
        profile.user = this.props.user.id;
        this.props.updateProfile(profile)
            .then(r => {
                toastr.success("Perfil actualizado");
                console.log(r);
            }).catch(e => {
                console.log(e);
        });
    };
    handleSubmitTutor = e => {
        e.preventDefault();
        let tutor = {...this.state.tutor};
        tutor.address = tutor.address.id;
        this.props.updateTutor(tutor)
            .then(r => {
                toastr.success("Tutor actualizado");
                console.log(r);
            }).catch(e => {
                toastr.error(e);
                console.log(e);
        });
    };

    scrollToSave = () => {
        scrollToComponent(this.saveButton);
    };


    changePicture = name => e => {
        //this.setState({loadingPictures:true});
        let profile = Object.assign({}, this.state.profile);
        let pictureToChange = Object.assign({}, this.state[name]);
        pictureToChange.loading = true;
        let file = e.target.files[0];
        if (file) {
            if (file.size > 3000000) {
                console.log('Too big');
                toastr.error('La imagen debe ser menor a 3MB');
                return;
            }
            const reader = new window.FileReader();

            reader.onload = (file => e => {
                console.log("el file", file);
                toastr.success("Imagen cargada");
                let img = e.target.result;
                pictureToChange.src = img;
                pictureToChange.file = file;
                profile[name] = pictureToChange.src;
                this.setState({profile, [name]: pictureToChange});
            })(file);

            reader.readAsDataURL(file);
        }


    };

    newAddress = () => this.props.history.push('/profile/newAddress');
    closeNewAddress = () => this.props.history.push('/profile');

    render() {
        const NewAddressRender = props => (
            <NewAddress
                closeModal={this.closeNewAddress}
                {...props}
                {...this.props}
            />
        );
        const {fetched} = this.props;
        const {user = {}, profile = {}, tutor = {}, birth_date, ssn_expiry_date, loadingPictures} = this.state;
        console.log(loadingPictures);
        console.log(profile);
        return (
            <Fragment>
                {
                    !fetched ? <MainLoader/> :
                        <Fragment>
                            {loadingPictures ? <LinearProgress style={{width: '50%', margin: '20px auto'}}/> :
                                <Portada
                                    profile={profile}
                                    changePicture={this.changePicture}
                                />
                            }
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
                                    scrollToSave={this.scrollToSave}
                                    onSubmit={this.handleSubmitProfile}
                                />
                                <AddressInfo
                                    addresses={profile.addresses}
                                    newAddress={this.newAddress}
                                />
                                <TutorInfo
                                    tutor={tutor}
                                    onChange={this.handleTutorChange}
                                    onDropDown={this.handleTutorDropDownChange}
                                    onSubmit={this.handleSubmitTutor}
                                />
                                <AcademicInfo/>
                                <LangInfo/>

                                <FloatingActionButton
                                    ref={comp => this.saveButton = comp}
                                    type="submit"
                                    style={styles.fab}
                                    tooltip="save"
                                    zDepth={5}
                                >
                                    <IconButton/>
                                </FloatingActionButton>


                            </div>
                            <Switch>
                                <Route path="/profile/:id" render={NewAddressRender}/>
                            </Switch>
                        </Fragment>
                }
            </Fragment>
        );
    }
}

const styles = {
    fab: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
};

const mapStateToProps = (state, ownProps) => ({
    user: state.user.info,
    profile: state.user.info.profile,
    tutor: state.tutor.mytutor.length > 0 ? state.tutor.mytutor[0] : tutorBlank,
    fetched: state.user.isFetched
});

const tutorBlank = {
    full_name: "",
    relationship: "",
    email: "",
    phone_number: "",
    cellphone_number: ""
};

ProfilePage = connect(mapStateToProps, {updateProfile, updateTutor})(ProfilePage);
export default ProfilePage;