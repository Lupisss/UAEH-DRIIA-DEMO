import React from 'react';
import {DatePicker, DropDownMenu, MenuItem, TextField, Paper, RaisedButton} from "material-ui";

export const PersonalInformationForm = ({user = {}, profile = {}, birth_date = {}, ssn_expiry_date = {}, onSubmit, handleProfileChange, handleUserChange}) => (
    <Paper className="Paper-form" zDepth={3} >
        <form className="Section-form" onSubmit={onSubmit}>
            <h2 style={{width:'100%'}} ><small>Datos personales</small></h2>
            <TextField
                // style={styles.item}
                name="academicId"
                value={profile.academicId}
                onChange={handleProfileChange}
                floatingLabelText="Numero de Cuenta"
                hintText="244755"
            />
            <TextField
                //style={styles.item}
                name="first_name"
                value={user.first_name}
                onChange={handleUserChange}
                floatingLabelText="Nombre(s)"
                hintText="ej. Miguel"
            />
            <TextField
                // style={styles.item}
                name="last_name"
                value={user.last_name}
                onChange={handleUserChange}
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
                name="nationality"
                value={profile.nationality}
                onChange={handleProfileChange}
                floatingLabelText="Nacionalidad"
                hintText="ej Mexicana"
            />
            <DatePicker
                name="birth_date"
                value={birth_date}
                //onChange={handleProfileChange}
                floatingLabelText="Fecha de nacimiento"
                autoOk={true}
            />
            <TextField
                // style={styles.item}
                name="curp"
                value={profile.curp}
                onChange={handleProfileChange}
                floatingLabelText="Curp"
                hintText="ej GODM90290995HDFNRG06"
            />
            <TextField
                // style={styles.item}
                name="passport_number"
                value={profile.passport_number}
                onChange={handleProfileChange}
                floatingLabelText="Número de pasaporte"
                hintText="ej G15XXXXXX"
            />
            <TextField
                name="ssn_number"
                value={profile.ssn_number}
                onChange={handleProfileChange}
                // style={styles.item}
                floatingLabelText="Número de seguro social"
                hintText="ej 13MD1323"
            />
            <DatePicker
                name="ssn_expiry_date"
                value={ssn_expiry_date}
                //onChange={handleProfileChange}
                floatingLabelText="Vigencia del seguro social"
                autoOk={true}
            />
            <TextField
                // style={styles.item}
                name="vote_key"
                value={profile.vote_key}
                onChange={handleProfileChange}
                floatingLabelText="Clave de Elector"
                hintText="ej GSDH45654XXXX"
            />
            <TextField
                // style={styles.item}
                name="secondary_email"
                value={profile.secondary_email}
                onChange={handleProfileChange}
                floatingLabelText="Email alterno"
                hintText="ej alguien@ejemplo.com"
                type="email"
            />
            <TextField
                // style={styles.item}
                name="phone_number"
                value={profile.phone_number}
                onChange={handleProfileChange}
                floatingLabelText="Teléfono fijo"
                hintText="ej 771 567 XX XX"
                type="tel"
            />
            <TextField
                // style={styles.item}
                name="cellphone_number"
                value={profile.cellphone_number}
                onChange={handleProfileChange}
                floatingLabelText="Telefono móvil"
                hintText="ej 771 567 XX XX"
                type="tel"
            />
            <div style={{width:'100%', margin:'20px 10px 10px'}}>
                <div>
                    <RaisedButton
                        //style={{width:'50%'}}
                        primary={true}
                        type="submit"
                        label="Guardar"
                        fullWidth={true}
                    />
                </div>
            </div>
        </form>
    </Paper>
);