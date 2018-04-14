import React, {Component, Fragment} from "react";
// import {ZipApi} from "../../api/repos";
import toastr from "toastr";
import { LangInfoForm } from "./LangInfoForm";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// import {} from '../../redux/actions/userActions';
import {addNewCertificationToProfile, updateCertificationToProfile} from '../../redux/actions/userActions';

class LangnfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Clave valor para controlar nuestro text field de zip address
            certification: {
                name: '',
                description: '',
                language: '',
                type: 'CE'
            },
        };
    }

    componentWillMount(){
        const {fetched, certification} = this.props;
        if (fetched){
            if (certification) {
                this.setState({certification})
            }
        }
    }

    componentWillReceiveProps(nP){
        const {fetched, certification} = nP;
        if (fetched){
            if (certification) {
                this.setState({certification})
            }
        }
    }

    // Función para manejar los cambios onChange de nuestro input zipAddress
    handleCertificationChange = e => {
        // clona la propiedad del state llamada certification
        let certification = {...this.state.certification};
        // Asigna a la llave llamada name el valor que le llega
        certification[e.target.name] = e.target.value;
        // Actualiza el state
        this.setState({certification});
    };
    // handleDropDownZipChange = (event, index, value) => this.setState({currentColonia: value});

    handleDropDownChange = name => (event, index, value) => {
        let certification = {...this.state.certification};
        certification[name] = value;
        this.setState({certification});
    };

    handleSubmit = e => {
        e.preventDefault();
        let certification = {...this.state.certification};
        certification.profile =  this.props.profileId;
        console.log(certification);
        if(certification.id){
            this.props.updateCertificationToProfile(certification)
                .then(r => {
                    toastr.success("Certificación editada");
                    this.props.history.push('/profile');
                })
                .catch(e => {
                    console.log(e);
                    toastr.error(e)
                });
        }else {
            this.props.addNewCertificationToProfile(certification)
                .then(r => {
                    toastr.success("Certificación añadida");
                    this.props.history.push('/profile');
                })
                .catch(e => {
                    console.log(e);
                    toastr.error(e)
                });
        }
    };


    render() {
        const {certification} = this.state;
        const {closeModal, certification : edit} = this.props;
        return (
            <Fragment>
                <LangInfoForm
                    certification={certification}
                    edit={edit}
                    handleCertificationChange={this.handleCertificationChange}
                    handleDropDownChange={this.handleDropDownChange}
                    closeModal={closeModal}
                    saveEditCertification={this.handleSubmit}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    const id = ownProps.match.params.id;
    console.log(id);
    let certification;
    if (id != 'newCertification') {
        certification = (state.user.info.profile.certifications.filter(certification => certification.id == id )[0]);
    }
    console.log('Te amo lupita reyes ',certification);
    return {
        certification,
        fetched: state.user.isFetched,
        profileId : state.user.info.profile.id
    }
};

LangnfoContainer = withRouter(LangnfoContainer);
LangnfoContainer = connect(mapStateToProps,{addNewCertificationToProfile,updateCertificationToProfile})(LangnfoContainer);
export default LangnfoContainer;