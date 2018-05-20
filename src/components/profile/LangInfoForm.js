import React from "react";
import {DropDownMenu, RaisedButton, FlatButton, TextField, Dialog, MenuItem, SelectField} from "material-ui";
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/action/delete';
import IconSend from 'material-ui/svg-icons/content/send';
import IconCancel from 'material-ui/svg-icons/navigation/close';

export const LangInfoForm = (
    {
        certification : {
            name,
            description,
            language,
            type
        },
        edit,
        closeModal,
        saveEditCertification,
        handleCertificationChange,
        handleDropDownChange
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
            tooltip={edit ? 'Editar' : 'Guardar'}
            form="addCertification"
            type="submit"
        >
            <IconSend/>
        </IconButton>,
    ];
    return (
        <Dialog
            onRequestClose={closeModal}
            actions={Actions}
            title={edit ? 'Editar certificación' : 'Nueva certificación'}
            open
            autoScrollBodyContent
        >
            <form onSubmit={saveEditCertification} id="addCertification" className="zip-address-extend">
                <TextField
                    name="name"
                    value={name}
                    onChange={handleCertificationChange}
                    floatingLabelText="Nombre"
                    hintText="B1"
                    maxLength={100}
                    required
                    //onBlur={this.getAddress}
                />
                <TextField
                    name="description"
                    value={description}
                    onChange={handleCertificationChange}
                    floatingLabelText="Descripción"
                    hintText="550 puntos"
                    maxLength={100}
                    required
                    //onBlur={this.getAddress}
                />
                <TextField
                    name="language"
                    value={language}
                    onChange={handleCertificationChange}
                    floatingLabelText="Lenguaje"
                    hintText="Inglés"
                    maxLength={100}
                    required
                    //onBlur={this.getAddress}
                />
                <SelectField
                    autoWidth={false}
                    style={{marginTop: 14, width: 256}}
                    value={type}
                    onChange={handleDropDownChange("type")}
                    floatingLabelText={"Tipo de certificación"}
                >
                    <MenuItem value="CE" primaryText="Certificado" />
                    <MenuItem value="CO" primaryText="Constancia" />
                </SelectField>
            </form>


        </Dialog>

    )
};