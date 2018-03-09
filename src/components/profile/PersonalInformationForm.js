import React from 'react';
import {DatePicker, DropDownMenu, MenuItem, TextField, Paper} from "material-ui";

export const PersonalInformationForm = () => (
    <Paper zDepth={3} className="Section-form" >
        <h2 style={{width:'100%'}} ><small>Datos personales</small></h2>
        <TextField
            // style={styles.item}
            floatingLabelText="Numero de Cuenta"
            hintText="244755"
        />
        <TextField
            //style={styles.item}
            floatingLabelText="Nombre(s)"
            hintText="ej. Miguel"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Apellido Paterno"
            hintText="ej. González"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Apellido Materno"
            hintText="ej. Durón"
        />
        <DropDownMenu autoWidth={false} value={1} style={{marginTop:14, width: 256}} >
            <MenuItem value={1} primaryText="Género" disabled={true}/>
            <MenuItem value={2} primaryText="Masculino"/>
            <MenuItem value={3} primaryText="Femenino"/>
            <MenuItem value={4} primaryText="Prefiero no decir"/>
        </DropDownMenu>
        <TextField
            // style={styles.item}
            floatingLabelText="Nacionalidad"
            hintText="ej Mexicana"
        />
        <DatePicker
            floatingLabelText="Fecha de nacimiento"
            autoOk={true}
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Curp"
            hintText="ej GODM90290995HDFNRG06"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Número de pasaporte"
            hintText="ej G15XXXXXX"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Número de seguro social"
            hintText="ej 13MD1323"
        />
        <DatePicker
            floatingLabelText="Vigencia del seguro social"
            autoOk={true}
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Clave de Elector"
            hintText="ej GSDH45654XXXX"
        />
        <TextField
            // style={styles.item}
            floatingLabelText="Email alterno"
            hintText="ej alguien@ejemplo.com"
            type="email"
        />
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