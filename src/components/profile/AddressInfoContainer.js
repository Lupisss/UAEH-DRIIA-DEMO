import React, {Component, Fragment} from "react";
import {ZipApi} from "../../api/repos";
import toastr from "toastr";
import {AddressInfoForm} from "./AddressInfoForm";
import { MenuItem} from "material-ui";
import {connect} from 'react-redux';

class AddressInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Clave valor para controlar nuestro text field de zip address
            zipAddress: {
                codigo_postal: '',
                colonias: [],
                estado: '',
                municipio: '',
                calleNumero: ''
            },
            // determinar si se ha buscado
            isSearched: false,
            // controlar al dropdown
            currentColonia: ""
        };
    }

    // Función para manejar los cambios onChange de nuestro input zipAddress
    handleZipAdressChange = e => {
        // clona la propiedad del state llamada zipAddress
        const zipAddress = Object.assign({}, this.state.zipAddress);
        // Asigna a la llave llamada name el valor que le llega
        zipAddress[e.target.name] = e.target.value;
        if (e.target.name === 'codigo_postal') {
            this.setState({isSearched: false});
        }
        // Actualiza el state
        this.setState({zipAddress});
    };

    handleDropDownZipChange = (event, index, value) => this.setState({currentColonia: value});


    getAddress = e => {
        // Prevenimos las acciones por default de un formulario
        e.preventDefault();
        // obtenemos el valor del codigo_postal (valor del innput con el nombre codigo_postal)
        const {zipAddress: {codigo_postal}} = this.state;
        ZipApi.getAddress(codigo_postal)
            .then(r => {
                console.log('La direccion', r);
                if (r.estado !== "") {
                    // indicamos que se ha realzado una busqueda
                    r.calleNumero = '';
                    this.setState({isSearched: true, zipAddress: r, currentColonia: r.colonias[0]});
                } else {
                    throw new Error("Código postal inválido");
                }
            }).catch(e => {
            console.log(e);
            toastr.warning('Código postal inválido')
        });

    };

    handleSubmit = e => {
        e.preventDefault();
        const address = {...this.state.zipAddress};
        console.log(address);
        toastr.success("Guardado");
    };

    render() {
        const {zipAddress, isSearched, currentColonia} = this.state;
        const {address, closeModal} = this.props;
        // vamos a reformatear el array de colonias
        //  la función map retorna un array nuevo con el retorno del cuerpo de su función
        const dataDropDown = zipAddress.colonias.map((colonia, key) =>
            <MenuItem key={key} value={colonia} primaryText={colonia}/>
        );
        return (
            <Fragment>
                <AddressInfoForm
                    address={address}
                    zipAddress={zipAddress}
                    isSearched={isSearched}
                    currentColonia={currentColonia}
                    dataDropDown={dataDropDown}
                    handleZipAdressChange={this.handleZipAdressChange}
                    handleDropDownZipChange={this.handleDropDownZipChange}
                    getAddress={this.getAddress}
                    closeModal={closeModal}
                    saveEditAddress={this.handleSubmit}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id);
    let address;
    if (id !== 'newAddress') {
        address = (state.user.info.profile.addresses.filter( address => address.id == id )[0]);
    }
    return {
        address
    }
};

AddressInfoContainer = connect(mapStateToProps,{})(AddressInfoContainer);
export default AddressInfoContainer;