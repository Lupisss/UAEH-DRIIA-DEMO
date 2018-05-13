import React from 'react';
import {Dialog, SelectField, MenuItem, RaisedButton, TextField} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/action/delete';
import IconSend from 'material-ui/svg-icons/content/send';
import IconCancel from 'material-ui/svg-icons/navigation/close';

export const AddAcademicProgram = ({ onSubmit, academicProgram, colleges, departments, onChange, onDepartmentChange,closeDialogNewAcademicProgram, deleteAcademicProgram, errors: {department : departmentError, college : collegeError}}) => {
    const {name, number_of_semesters, total_number_of_credits,department,college} = academicProgram;
    const actionsNewAcademicProgram = [
        <IconButton
            tooltip="Cancelar"
            onClick={closeDialogNewAcademicProgram}
        >
            <IconCancel/>
        </IconButton>,
        <IconButton
            tooltip="Agregar"
            form="addnewacademicProgram"
            type="submit"
        >
            <IconSend/>
        </IconButton>
    ];

    const listOfColleges = colleges.map( (college, index) =>
        <MenuItem key={index} value={college.id} primaryText={college.name} />
    );

    const listOfDepartments = departments.map( (department, index) =>
        <MenuItem key={index} value={department.id} primaryText={department.name} />
    );

    if (academicProgram.id) actionsNewAcademicProgram.splice(
        1,
        0,
        <IconButton
            onClick={()=>deleteAcademicProgram(academicProgram.id)}
            tooltip="Eliminar"
        >
            <Icon />
        </IconButton>
    );

    return (
        <Dialog
            modal={false}
            open
            actions={actionsNewAcademicProgram}
            onRequestClose={closeDialogNewAcademicProgram}
            contentStyle={{width: '40%'}}
            title="Agregar un programa académico"
        >
            <form id="addnewacademicProgram" className="add-academicProgram-dialog" onSubmit={onSubmit}>
                <TextField
                    floatingLabelText="Nombre del programa académico"
                    hintText="ej. Ciencias computacionales"
                    required
                    name="name"
                    value={name}
                    onChange={onChange}
                    fullWidth
                />
                <TextField
                    floatingLabelText="Número de semestres"
                    hintText="ej. 9"
                    name="number_of_semesters"
                    value={number_of_semesters}
                    onChange={onChange}
                    fullWidth
                    type="number"
                    min={0}
                    max={99}
                />
                <TextField
                    floatingLabelText="Número total de créditos"
                    hintText="ej. 560"
                    name="total_number_of_credits"
                    value={total_number_of_credits}
                    onChange={onChange}
                    fullWidth
                    type="number"
                    min={0}
                    max={99999}
                />

                <SelectField
                    required
                    floatingLabelText="Universidad"
                    value={college}
                    onChange={onDepartmentChange("college")}
                    style={{width:'100%'}}
                    errorText={collegeError}
                >
                    {listOfColleges}
                </SelectField>

                {/*Menu que está en el formulario para agregar universidad, el value son las constantes declaradas arriba  */}
                <SelectField
                    required
                    floatingLabelText="Departamento"
                    value={department}
                    onChange={onDepartmentChange("department")}
                    style={{width:'100%'}}
                    errorText={departmentError}
                >
                    {listOfDepartments}
                </SelectField>
            </form>
        </Dialog>
    );
};