import React, {Component, Fragment} from 'react';
import './ProfileStylesheet.css';
import {PortadaDisplay as Portada} from './PortadaDisplay';
import {PersonalInformationForm as PersonalInformation} from './PersonalInformationForm';
import {AddressInfoComponent as AddressInfo} from './AddressInfoComponent';
import NewAddress from './AddressInfoContainer';
import NewCertification from './LangInfoContainer';
import {TutorInfoForm as TutorInfo} from "./TutorInfoForm";
import {AcademicInfoForm as AcademicInfo} from './AcademicInfoForm';
import {LangInfoComponent as LangInfo} from './LangInfoComponent';
import {connect} from 'react-redux';
import moment from 'moment';
import {updateProfile,deleteAddressToProfile, deleteCertificationToProfile} from '../../redux/actions/userActions';
import {updateTutor,updateAddrTutor} from '../../redux/actions/tutorActions';
import {MainLoader} from '../loader/Loader';
import {FloatingActionButton, LinearProgress, MenuItem} from 'material-ui';
import IconButton from 'material-ui/svg-icons/content/save'
import toastr from 'toastr';
import scrollToComponent from 'react-scroll-to-component';
import {Route, Switch} from "react-router-dom";
import academicPrograms from "../../redux/reducers/academicProgramsReducer";
import {ProfileApi, ZipApi} from '../../api/repos';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                birth_date: "1995-09-29",
                ssn_expiry_date: "1995-09-29"
            },
            tutor: {},
            tutorAddress: {},
            currentColonia: "",
            isSearched: false,
            user: {},
            academicInfo: {},
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
        let tutorAddress = {};
        let currentColonia = "";
        if (this.props.fetched) {
            let profile = JSON.parse(JSON.stringify(this.props.profile));
            let tutor = JSON.parse(JSON.stringify(this.props.tutor));
            if(tutor){
                if(!tutor.address){
                    tutor.address = {
                        address1: "",
                        suburb: "",
                        city: "",
                        state: "",
                        country: "",
                        zip_code: ""
                    }
                }else {
                    tutorAddress = {
                        id : tutor.address.id,
                        codigo_postal: tutor.address.zip_code,
                        colonias: [tutor.address.suburb],
                        estado: tutor.address.state,
                        municipio: tutor.address.city,
                        calleNumero: tutor.address.address1
                    };
                    currentColonia = tutor.address.suburb;
                }
            }
            if(profile){
                if(!profile.academic_program){
                    profile.academic_program = {
                        id : null,
                        name :"",
                        number_of_semesters :0,
                        total_number_of_credits :0
                    }
                }
            }
            birth_date = profile.birth_date ? moment(this.props.profile.birth_date, "YYYY-MM-DD").toDate() : {};
            ssn_expiry_date = profile.ssn_expiry_date ? moment(this.props.profile.ssn_expiry_date, "YYYY-MM-DD").toDate() : {};
            this.setState({
                profile,
                user: this.props.user,
                tutor,
                tutorAddress,
                currentColonia,
                birth_date: birth_date,
                ssn_expiry_date: ssn_expiry_date
            });
        }
    }

    componentWillReceiveProps(nP) {
        let birth_date = {};
        let ssn_expiry_date = {};
        let tutorAddress = {};
        let currentColonia = "";
        if (nP.fetched) {
            let profile = JSON.parse(JSON.stringify(nP.profile));
            let tutor = JSON.parse(JSON.stringify(nP.tutor));
            if(tutor){
                if(!tutor.address){
                    tutor.address = {
                        address1: "",
                        suburb: "",
                        city: "",
                        state: "",
                        country: "",
                        zip_code: ""
                    }
                }else {
                    tutorAddress = {
                        id : tutor.address.id,
                        codigo_postal: tutor.address.zip_code,
                        colonias: [tutor.address.suburb],
                        estado: tutor.address.state,
                        municipio: tutor.address.city,
                        calleNumero: tutor.address.address1
                    };
                    currentColonia = tutor.address.suburb;
                }
            }
            if(profile){
                if(!profile.academic_program){
                    profile.academic_program = {
                            id : null,
                            name :"",
                            number_of_semesters :0,
                            total_number_of_credits :0
                    }
                }
            }
            birth_date = profile.birth_date ? moment(nP.profile.birth_date, "YYYY-MM-DD").toDate() : {};
            ssn_expiry_date = profile.ssn_expiry_date ? moment(nP.profile.ssn_expiry_date, "YYYY-MM-DD").toDate() : {};
            this.setState({
                profile,
                user: nP.user,
                tutor,
                tutorAddress,
                currentColonia,
                birth_date: birth_date,
                ssn_expiry_date: ssn_expiry_date
            });
        }
    }

    handleProfileChange = e => {
        let profile = Object.assign({}, this.state.profile);
        profile[e.target.name] = e.target.value;
        this.setState({profile, });
    };

    handleTutorChange = e => {
        let tutor = Object.assign({}, this.state.tutor);
        tutor[e.target.name] = e.target.value;
        this.setState({tutor});
    };

    handleDropDownChange = name => (event, index, value) => {
        let profile = Object.assign({}, this.state.profile);
        profile[name] = value;
        if (name === 'academic_program') {
            profile['academic_program'] = this.props.academicPrograms.filter( academicProgram =>
                academicProgram.id == value
            )[0];
            console.log('oh si',profile.academic_program);
        }
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
        delete profile.profilePicture;
        delete profile.wallPicture;
        console.log('El perfil',profile);
        console.log('Perfil antes de guardar: ',profile);
        this.props.updateProfile(profile)
            .then(r => {
                toastr.success("Perfil actualizado");
                console.log(r);
                let profilePicture = {...this.state.profilePicture};
                let wallPicture = {...this.state.wallPicture};
                profilePicture.src = wallPicture.src = "" ;
                profilePicture.file = wallPicture.file = "";
                this.setState({
                    profilePicture,
                    wallPicture
                })
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
                let profileToSend = {
                    [name] : img,
                    id : profile.id
                };
                this.props.updateProfile(profileToSend)
                    .then( p => {
                        profile[name] = img;
                        this.setState({profile, [name]: pictureToChange});
                    }).catch( e => {
                        console.log('Error al subir la imagen ',e);
                });

            })(file);
            reader.readAsDataURL(file);
        }
    };

    newAddress = () => this.props.history.push('/profile/address/newAddress');

    deleteAddress = idAddress => {
        this.props.deleteAddressToProfile(idAddress)
            .then(r => {
                toastr.warning("Eliminado");
            }).catch(e => {
                toastr.error(JSON.stringify(e))
        });
    };
    newCertification = () => this.props.history.push('/profile/certification/newCertification');

    deleteCertification = certificationId => {
        this.props.deleteCertificationToProfile(certificationId)
            .then(r => {
                toastr.warning("Eliminado");
            }).catch(e => {
                toastr.error(JSON.stringify(e))
        });
    };

    closeNewAddress = () => this.props.history.push('/profile');

    getAddress = e => {
        // Prevenimos las acciones por default de un formulario
        e.preventDefault();
        // obtenemos el valor del codigo_postal (valor del innput con el nombre codigo_postal)
        const {tutorAddress: {codigo_postal}} = this.state;
        ZipApi.getAddress(codigo_postal)
            .then(r => {
                console.log('La direccion', r);
                if (r.estado !== "") {
                    // indicamos que se ha realzado una busqueda
                    r.calleNumero = '';
                    r.id = this.state.tutorAddress.id;
                    this.setState({isSearched: true, tutorAddress: r, currentColonia: r.colonias[0]});
                } else {
                    throw new Error("Código postal inválido");
                }
            }).catch(e => {
                console.log(e);
                toastr.warning('Código postal inválido')
        });

    };

    handleTutorAddressChange = e => {
        // clona la propiedad del state llamada tutorAddress
        const tutorAddress = Object.assign({}, this.state.tutorAddress);
        // Asigna a la llave llamada name el valor que le llega
        tutorAddress[e.target.name] = e.target.value;
        if (e.target.name === 'codigo_postal') {
            this.setState({isSearched: false});
        }
        // Actualiza el state
        this.setState({tutorAddress});
    };

    updateTutorAddress = e => {
        e.preventDefault();
        const tutorAddress = {...this.state.tutorAddress};
        const tutor = {...this.state.tutor};
        tutor.address = tutor.address.id;
        const address = {
            id: tutorAddress.id,
            address1 : tutorAddress.calleNumero,
            suburb : this.state.currentColonia,
            city : tutorAddress.municipio,
            state : tutorAddress.estado,
            country : 'México',
            zip_code : tutorAddress.codigo_postal
        };
        console.log(address);
        if(address.id){
            this.props.updateAddrTutor(tutor,address)
                .then(r => {
                    toastr.success("Tutor editado");
                })
                .catch(e => {
                    console.log(e);
                    toastr.error(e)
                });
        }

    };

    handleDropDownTutoAddChange = (event, index, value) => this.setState({currentColonia: value});

    render() {
        const NewAddressRender = props => (
            <NewAddress
                closeModal={this.closeNewAddress}
                {...props}
            />
        );
        const NewCertificationRender = props => (
            <NewCertification
                closeModal={this.closeNewAddress}
                {...props}
            />
        );
        const {fetched, history, academicPrograms} = this.props;
        const academicProgramsUAEH = academicPrograms.filter( aP => aP.department.college == 1);
        const {user = {}, profile = {}, tutor = {}, tutorAddress, isSearched, currentColonia, birth_date, ssn_expiry_date, loadingPictures} = this.state;
        console.log(loadingPictures);
        console.log('Este es el perfil : ',profile);
        let dataDropDown = [];
        if(tutorAddress){
            console.log("El tutor address",tutorAddress);
            if (tutorAddress.colonias) {
                dataDropDown = tutorAddress.colonias.map((colonia, key) =>
                    <MenuItem key={key} value={colonia} primaryText={colonia}/>
                );
            }
        }
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
                                    history={history}
                                    addresses={profile.addresses}
                                    newAddress={this.newAddress}
                                    deleteAddress={this.deleteAddress}
                                />
                                <TutorInfo
                                    tutor={tutor}
                                    tutorAddress={tutorAddress}
                                    dataDropDown={dataDropDown}
                                    updateTutorAddress={this.updateTutorAddress}
                                    handleDropDownTutoAddChange={this.handleDropDownTutoAddChange}
                                    isSearched={isSearched}
                                    currentColonia={currentColonia}
                                    handleTutorAddressChange={this.handleTutorAddressChange}
                                    getAddress={this.getAddress}
                                    onChange={this.handleTutorChange}
                                    onDropDown={this.handleTutorDropDownChange}
                                    onSubmit={this.handleSubmitTutor}
                                />
                                <AcademicInfo
                                    profile={profile}
                                    academicPrograms={academicProgramsUAEH}
                                    handleProfileChange={this.handleProfileChange}
                                    handleDropDownChange={this.handleDropDownChange}
                                    onSubmit={this.handleSubmitProfile}
                                />
                                <LangInfo
                                    history={history}
                                    certifications={profile.certifications}
                                    newCertification={this.newCertification}
                                    deleteCertification={this.deleteCertification}
                                />
                            </div>
                            <Switch>
                                <Route path="/profile/address/:id" render={NewAddressRender}/>
                                <Route path="/profile/certification/:id" render={NewCertificationRender}/>
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
    departments: state.departments.list,
    academicPrograms: state.academicPrograms.list,
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

ProfilePage = connect(mapStateToProps, {updateProfile, deleteAddressToProfile, deleteCertificationToProfile, updateTutor,updateAddrTutor})(ProfilePage);
export default ProfilePage;