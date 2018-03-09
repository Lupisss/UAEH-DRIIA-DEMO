import React, {Fragment} from "react";
import {DropDownMenu, MenuItem, Paper, TextField} from "material-ui";

export const AcademicInfoForm = () => (
    <Paper zDepth={3} className="Section-form" >
        <h2 style={{width:'100%'}}><small>Información académica actual</small></h2>
        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
        <DropDownMenu autoWidth={false} value={2} style={{marginTop:14, width: 256}} >
            <MenuItem value={1} primaryText="Instituto" disabled={true}/>
            <MenuItem value={2} primaryText="ICBI"/>
            <MenuItem value={3} primaryText="ICEA"/>
            <MenuItem value={4} primaryText="ICSa"/>
        </DropDownMenu>
        <DropDownMenu autoWidth={false} value={2} style={{marginTop:14, width: 256}} >
            <MenuItem value={1} primaryText="Programa educativo" disabled={true}/>
            <MenuItem value={2} primaryText="Lic en Ciencias Computacionales"/>
            <MenuItem value={3} primaryText="Lic en Ingenieria Civil"/>
            <MenuItem value={4} primaryText="Lic en Arquitectura"/>
        </DropDownMenu>
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
    </Paper>

);