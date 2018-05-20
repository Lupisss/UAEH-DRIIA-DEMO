import React from "react";
import {DropDownMenu, RaisedButton, FlatButton, TextField, Dialog, SelectField, IconButton} from "material-ui";
import Icon from 'material-ui/svg-icons/action/delete';
import IconSend from 'material-ui/svg-icons/content/send';
import IconCancel from 'material-ui/svg-icons/navigation/close';
export const AddressInfoForm = (
    {
        isSearched,
        dataDropDown,
        zipAddress: {codigo_postal, estado, municipio, calleNumero},
        currentColonia,
        handleZipAdressChange,
        handleDropDownZipChange,
        getAddress,
        closeModal,
        address,
        saveEditAddress
    }
) => {
    const Actions = [
        <IconButton
            tooltip="Cancelar"
            onClick={closeModal}
        >
            <IconCancel/>
        </IconButton>,
        <IconButton
            tooltip={ address ? 'Editar' : 'Guardar'}
            form="addAddress"
            type="submit"
            disabled={!isSearched}
        >
            <IconSend/>
        </IconButton>
    ];
    return (
        <Dialog
            onRequestClose={closeModal}
            actions={Actions}
            title={ address ? 'Editar dirección' : 'Nueva dirección'}
            open
            autoScrollBodyContent
        >
            <form onSubmit={getAddress} className="zip-address-search">
                <TextField
                    name="codigo_postal"
                    value={codigo_postal}
                    floatingLabelText="Código postal"
                    onChange={handleZipAdressChange}
                    required
                    pattern="[0-9]{5}"
                    maxLength={5}
                    hintText={"ej 42119"}
                    //onBlur={this.getAddress}
                />
                <div>
                    <FlatButton
                        label="Buscar"
                        //onClick={getAddress}
                        type="submit"
                        primary
                    />
                </div>
            </form>
            {
                // si ya se ha buscado el zip code ...
                isSearched &&
                <form onSubmit={saveEditAddress} id="addAddress" className="zip-address-extend">
                    <TextField
                        name="codigo_postal"
                        value={codigo_postal}
                        disabled
                        floatingLabelText="Código Postal"
                        //onBlur={this.getAddress}
                    />
                    <SelectField
                        onChange={handleDropDownZipChange}
                        autoWidth={false}
                        value={currentColonia}
                        style={{marginTop: 14, width: 256}}
                        floatingLabelText={"Colonia"}
                    >
                        {dataDropDown}
                    </SelectField>
                    <TextField
                        name="estado"
                        value={estado}
                        floatingLabelText="Estado"
                        disabled
                    />
                    <TextField
                        name="municipio"
                        value={municipio}
                        floatingLabelText="Municipio"
                        disabled
                    />
                    <TextField
                        name="calleNumero"
                        value={calleNumero}
                        onChange={handleZipAdressChange}
                        floatingLabelText="Calle y Número"
                        style={{width:'80%'}}
                        required
                        maxLength={100}
                    />
                </form>
            }

        </Dialog>

    )
};