import React, {Fragment} from "react";
import {DropDownMenu, MenuItem, Paper, Subheader, TextField} from "material-ui";

export const TutorInfoForm = () => (
    <Paper zDepth={3} className="Section-form" >
        <h2 style={{width:'100%'}}><small>Datos del padre o tutor</small></h2>
        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
        <TextField
            // style={styles.item}
            floatingLabelText="Nombre completo"
            hintText="ej Miguel R. Gonzalez Duron"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Dirección"
            hintText="ej Cipres 104 Pachuca de Soto, Hidalgo"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Email"
            hintText="ej algo@ejemplo.com"
        />
        <DropDownMenu autoWidth={false} value={2} style={{marginTop:14, width: 256}} >
            <Subheader>Parentesco</Subheader>
            <MenuItem value={2} primaryText="Madre"/>
            <MenuItem value={3} primaryText="Padre"/>
            <MenuItem value={4} primaryText="Tío"/>
            <MenuItem value={4} primaryText="Madrastra"/>
        </DropDownMenu>

        <TextField
            // style={styles.item}
            floatingLabelText="Teléfono fijo"
            hintText="ej 771 567 XX XX"
            type="tel"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Telefono móvil"
            hintText="ej 771 567 XX XX"
            type="tel"
        />
    </Paper>
);