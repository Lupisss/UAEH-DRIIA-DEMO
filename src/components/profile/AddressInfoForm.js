import React, {Fragment} from "react";
import {DropDownMenu, Paper, RaisedButton, TextField} from "material-ui";

export const AddressInfoForm =
    ({
         isSearched,
         dataDropDown,
         zipAddress:{codigo_postal, estado, municipio, calleNumero},
         currentColonia,
         handleZipAdressChange,
         handleDropDownZipChange,
         getAddress
    }) => (
    <Paper zDepth={3} className="Section-map" >
        <h2 style={{width:'100%'}}><small>Dirección</small></h2>
        <div className="zip-address-search">
            <TextField
                name="codigo_postal"
                value={codigo_postal}
                floatingLabelText="Código postal"
                onChange={handleZipAdressChange}
                //required={true}
                //pattern="[0-9]{5}"
                //onBlur={this.getAddress}
            />
            <div>
                <RaisedButton
                    primary={true}
                    label="Buscar"
                    onClick={getAddress}
                    type="submit"
                />
            </div>
        </div>
        {
            // si ya se ha buscado el zip code ...
            isSearched  &&
            <div className="zip-address-extend">
                <DropDownMenu
                    onChange={handleDropDownZipChange}
                    autoWidth={false}
                    value={currentColonia}
                    style={{marginTop:14, width: 256}}
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
                />
            </div>
        }

    </Paper>

);