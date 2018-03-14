import React from 'react';
import {DatePicker, DropDownMenu, MenuItem, TextField, Paper} from "material-ui";

export const PersonalInformationForm = ({user = {}, profile = {}, birth_date = {}, ssn_expiry_date = {}}) => (
    <Paper zDepth={3} className="Section-form" >
        <h2 style={{width:'100%'}} ><small>Datos personales</small></h2>
        <TextField
            // style={styles.item}
            name="academicId"
            value={profile.academicId}
            floatingLabelText="Numero de Cuenta"
            hintText="244755"
        />
        <TextField
            //style={styles.item}
            name="first_name"
            value={user.first_name}
            floatingLabelText="Nombre(s)"
            hintText="ej. Miguel"
        />
        <TextField
            // style={styles.item}
            name="last_name"
            value={user.last_name}
            floatingLabelText="Apellidos"
            hintText="ej. González"
        />
        <DropDownMenu autoWidth={false} value={profile.gender} style={{marginTop:14, width: 256}} >
            <MenuItem value="M" primaryText="Masculino"/>
            <MenuItem value="F" primaryText="Femenino"/>
            <MenuItem value={4} primaryText="Prefiero no decir"/>
        </DropDownMenu>
        <TextField
            // style={styles.item}
            floatingLabelText="Nacionalidad"
            hintText="ej Mexicana"
        />
        <DatePicker
            name="birth_date"
            value={birth_date}
            floatingLabelText="Fecha de nacimiento"
            autoOk={true}
        />
        <TextField
            // style={styles.item}
            name="curp"
            value={profile.curp}
            floatingLabelText="Curp"
            hintText="ej GODM90290995HDFNRG06"
        />
        <TextField
            // style={styles.item}
            name="passport_number"
            value={profile.passport_number}
            floatingLabelText="Número de pasaporte"
            hintText="ej G15XXXXXX"
        />
        <TextField
            name="ssn_number"
            value={profile.ssn_number}
            // style={styles.item}
            floatingLabelText="Número de seguro social"
            hintText="ej 13MD1323"
        />
        <DatePicker
            name="ssn_expiry_date"
            value={ssn_expiry_date}
            floatingLabelText="Vigencia del seguro social"
            autoOk={true}
        />
        <TextField
            // style={styles.item}
            name="vote_key"
            value={profile.vote_key}
            floatingLabelText="Clave de Elector"
            hintText="ej GSDH45654XXXX"
        />
        <TextField
            // style={styles.item}
            name="secondary_email"
            value={profile.secondary_email}
            floatingLabelText="Email alterno"
            hintText="ej alguien@ejemplo.com"
            type="email"
        />
        <TextField
            // style={styles.item}
            name="phone_number"
            value={profile.phone_number}
            floatingLabelText="Teléfono fijo"
            hintText="ej 771 567 XX XX"
            type="tel"
        />
        <TextField
            // style={styles.item}
            name="cellphone_number"
            value={profile.cellphone_number}
            floatingLabelText="Telefono móvil"
            hintText="ej 771 567 XX XX"
            type="tel"
        />
    </Paper>
);