import React from "react";
import {DropDownMenu, RaisedButton, FlatButton, TextField, Dialog} from "material-ui";

export const LangInfoForm = (
    {
        certification : {
            name,
            description,
            language
        },
        edit,
        closeModal,
        saveEditCertification,
        handleCertificationChange
    }
) => {
    const Actions = [
        <FlatButton
            //onClick={}
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
            </form>


        </Dialog>

    )
};