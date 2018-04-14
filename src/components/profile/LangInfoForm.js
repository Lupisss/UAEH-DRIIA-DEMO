import React from "react";
import {DropDownMenu, RaisedButton, FlatButton, TextField, Dialog, MenuItem} from "material-ui";

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
        <FlatButton
            onClick={closeModal}
            secondary
            label="Cancelar"
        />,
        <RaisedButton
            type="submit"
            form="addCertification"
            keyboardFocused
            primary
            label={edit ? 'Editar' : 'Guardar'}

        />
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
                    //onBlur={this.getAddress}
                />
                <TextField
                    name="description"
                    value={description}
                    onChange={handleCertificationChange}
                    floatingLabelText="Descripción"
                    hintText="550 puntos"
                    //onBlur={this.getAddress}
                />
                <TextField
                    name="language"
                    value={language}
                    onChange={handleCertificationChange}
                    floatingLabelText="Lenguaje"
                    hintText="Inglés"
                    //onBlur={this.getAddress}
                />
                <DropDownMenu
                    autoWidth={false}
                    style={{marginTop: 14, width: 256}}
                    value={type}
                    onChange={handleDropDownChange("type")}
                >
                    <MenuItem value="CE" primaryText="Certificado" />
                    <MenuItem value="CO" primaryText="Constancia" />
                </DropDownMenu>
            </form>


        </Dialog>

    )
};