import React from "react";
import {DropDownMenu, MenuItem, Card, CardHeader, CardText, TextField} from "material-ui";

export const AcademicInfoForm = (
    {
        academicPrograms = [],
        profile: {academic_program},
        handleDropDownChange
    }
) => {
    const academicProgramsForDropDown = academicPrograms.map((academicProgram, index) =>
        <MenuItem key={index} value={academicProgram.name} primaryText={academicProgram.name}/>
    );
    return (
        <Card zDepth={3} className="Paper-form">
            <CardHeader
                title="Información académica actual"
                titleStyle={{fontSize: '1.2rem'}}
                actAsExpander
                showExpandableButton
            />
            <CardText expandable>
                <div className="Section-form">
                    <DropDownMenu
                        autoWidth={false}
                        value={academic_program}
                        style={{marginTop: 14, width: 256}}
                        onChange={handleDropDownChange("academic_program")}
                    >
                        {academicProgramsForDropDown}
                    </DropDownMenu>
                    {/*<DropDownMenu autoWidth={false} value={2} style={{marginTop: 14, width: 256}}>*/}
                    {/*<MenuItem value={1} primaryText="Programa educativo" disabled={true}/>*/}
                    {/*<MenuItem value={2} primaryText="Lic en Ciencias Computacionales"/>*/}
                    {/*<MenuItem value={3} primaryText="Lic en Ingenieria Civil"/>*/}
                    {/*<MenuItem value={4} primaryText="Lic en Arquitectura"/>*/}
                    {/*</DropDownMenu>*/}
                    <TextField
                        // style={styles.item}
                        floatingLabelText="Promedio general"
                        hintText="ej 9.79"
                        type="text"
                        pattern="^\d?\d?\.\d?\d?$"
                    />
                    <TextField
                        // style={styles.item}
                        floatingLabelText="Número de semestres"
                        hintText="ej 9"
                        type="number"
                    />
                    <TextField
                        // style={styles.item}
                        floatingLabelText="Semestre actual"
                        hintText="ej 7"
                        type="number"
                    />
                    <TextField
                        // style={styles.item}
                        floatingLabelText="Número total de créditos"
                        hintText="ej 226"
                    />
                    <TextField
                        // style={styles.item}
                        floatingLabelText="Número de créditos cubiertos"
                        hintText="ej 163.5"
                    />
                    <TextField
                        // style={styles.item}
                        floatingLabelText="Porcentaje de créditos"
                        hintText="ej 72.5"
                    />
                </div>
            </CardText>
        </Card>

    )
};