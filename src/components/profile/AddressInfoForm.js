import React from "react";
import {DropDownMenu, RaisedButton, FlatButton, TextField, Dialog} from "material-ui";

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
        <FlatButton
            onClick={closeModal}
            secondary
            label="Cancelar"
        />,
        <RaisedButton
            type="submit"
            form="addAddress"
            keyboardFocused
            primary
            label={ address ? 'Editar' : 'Guardar'}

        />
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
                        floatingLabelText="C.P."
                        //onBlur={this.getAddress}
                    />
                    <DropDownMenu
                        onChange={handleDropDownZipChange}
                        autoWidth={false}
                        value={currentColonia}
                        style={{marginTop: 14, width: 256}}
                        floatingLabelText="Colonia"
                    >
                        {dataDropDown}
                    </DropDownMenu>
                    <TextField
                        name="estado"
                        value={estado}
                        floatingLabelText="Estado"
                        disabled={true}
                    />
                    <TextField
                        name="municipio"
                        value={municipio}
                        floatingLabelText="Municipio"
                        disabled={true}
                    />
                    <TextField
                        name="calleNumero"
                        value={calleNumero}
                        onChange={handleZipAdressChange}
                        floatingLabelText="Calle y Número"
                        style={{width:'80%'}}
                    />
                </form>
            }

        </Dialog>

    )
};