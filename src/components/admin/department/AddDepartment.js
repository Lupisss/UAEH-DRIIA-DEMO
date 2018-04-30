import React from 'react';
import {Dialog, DropDownMenu, MenuItem, RaisedButton, TextField} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/action/delete';
import IconSend from 'material-ui/svg-icons/content/send';
import IconCancel from 'material-ui/svg-icons/navigation/close';

export const AddDepartment = ({ onSubmit, department, colleges, onChange, onCollegeChange,closeDialogNewDepartment, deleteDepartment}) => {
    const {name, abbreviation, college} = department;
    const actionsNewDepartment = [
        <IconButton
            tooltip="Cancelar"
            onClick={closeDialogNewDepartment}
        >
            <IconCancel/>
        </IconButton>,
        <IconButton
            tooltip="Agregar"
            form="addnewdepartment"
            type="submit"
        >
            <IconSend/>
        </IconButton>
    ];

    const listOfColleges = colleges.map( (college, index) =>
        <MenuItem key={index} value={college.id} primaryText={college.name} />
    );

    if (department.id) actionsNewDepartment.splice(
        1,
        0,
        <IconButton
            onClick={()=>deleteDepartment(department.id)}
            tooltip="Eliminar"
        >
            <Icon />
        </IconButton>
    );

    return (
        <Dialog
            modal={false}
            open
            actions={actionsNewDepartment}
            onRequestClose={closeDialogNewDepartment}
            contentStyle={{width: '40%'}}
            title="Agregar un departamento"
        >
            <form id="addnewdepartment" className="add-department-dialog" onSubmit={onSubmit}>
                <TextField
                    floatingLabelText="Nombre del departamento"
                    hintText="ej. Instituto de Ciencias Básicas e Ingeniería"
                    required
                    name="name"
                    value={name}
                    onChange={onChange}
                    fullWidth
                />
                <TextField
                    floatingLabelText="Abreviación"
                    hintText="ej. ICBI"
                    required
                    name="abbreviation"
                    value={abbreviation}
                    onChange={onChange}
                    fullWidth
                />
                {/*Menu que está en el formulario para agregar universidad, el value son las constantes declaradas arriba  */}
                <DropDownMenu value={college} onChange={onCollegeChange} style={{width:'100%'}}>
                    {listOfColleges}
                </DropDownMenu>
            </form>
        </Dialog>
    );
};