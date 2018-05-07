import React from "react";
import {SelectField, MenuItem, Card, CardHeader, CardText, TextField} from "material-ui";
import {SaveButton} from "./SaveButton";

export const AcademicInfoForm = (
    {
        academicPrograms = [],
        profile: {
            academic_program : {
                id = 0,
                name = "",
                number_of_semesters = undefined,
                total_number_of_credits = undefined
            },
            credits_coursed = undefined,
            credit_percentage_coursed = undefined,
            current_semester = undefined,
            grade = undefined
        },
        handleDropDownChange,
        handleProfileChange,
        onSubmit
    }
) => {
    const academicProgramsForDropDown = academicPrograms.map((academicProgram, index) =>
        <MenuItem key={index} value={academicProgram.id} primaryText={academicProgram.name}/>
    );
    const percentage = ((credits_coursed * 100) / (total_number_of_credits)).toFixed(2) + "%";
    return (
        <Card zDepth={3} className="Paper-form">
            <CardHeader
                title="Información académica actual"
                titleStyle={{fontSize: '1.2rem'}}
                actAsExpander
                showExpandableButton
            />
            <CardText expandable>
                <form onSubmit={onSubmit} className="Section-form">
                    <SelectField
                        floatingLabelText="Programa académico"
                        autoWidth={false}
                        value={id}
                        style={{marginTop: 14, width: 256}}
                        onChange={handleDropDownChange("academic_program")}
                    >
                        {academicProgramsForDropDown}
                    </SelectField>
                    <TextField
                        // style={styles.item}
                        floatingLabelText="Número de semestres"
                        value={number_of_semesters}
                        disabled
                        hintText="ej 9"
                        type="number"
                    />
                    <TextField
                        // style={styles.item}
                        value={total_number_of_credits}
                        floatingLabelText="Número total de créditos"
                        disabled
                        hintText="ej 226"
                    />
                    <TextField
                        // style={styles.item}
                        name="grade"
                        onChange={handleProfileChange}
                        value={grade}
                        floatingLabelText="Promedio general"
                        hintText="ej 9.79"
                        type="number"
                        step="0.01"
                        min={0}
                        max={10}
                        pattern="^\d?\d?\.\d?\d?$"
                    />
                    <TextField
                        // style={styles.item}
                        name="current_semester"
                        onChange={handleProfileChange}
                        value={current_semester}
                        floatingLabelText="Semestre actual"
                        hintText="ej 7"
                        type="number"
                        min={1}
                        max={number_of_semesters}
                    />
                    <TextField
                        // style={styles.item}
                        name="credits_coursed"
                        onChange={handleProfileChange}
                        value={credits_coursed}
                        step="0.01"
                        floatingLabelText="Número de créditos cubiertos"
                        type="number"
                        min={1}
                        max={total_number_of_credits}
                        hintText="ej 163.5"
                    />
                    <TextField
                        // style={styles.item}
                        disabled
                        value={percentage}
                        floatingLabelText="Porcentaje de créditos"
                        hintText="ej 72.5"
                    />
                    <SaveButton/>
                </form>
            </CardText>
        </Card>

    )
};