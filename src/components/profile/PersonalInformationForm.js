import React from 'react';
import {
    DatePicker,
    DropDownMenu,
    MenuItem,
    TextField,
    CardHeader,
    Card,
    CardText,
    RaisedButton, SelectField
} from "material-ui";
import {SaveButton} from "./SaveButton";
//import IconSVG from 'material-ui/svg-icons/navigation/arrow-downward';

export const PersonalInformationForm = (
    {
        user = {},
        profile = {},
        birth_date = {},
        ssn_expiry_date = {},
        onSubmit,
        handleProfileChange,
        handleUserChange,
        handleDropDownChange,
        handleDatePickerChange,
        scrollToSave,

    }
) => (
    <Card className="Paper-form" zDepth={3} initiallyExpanded>
        <CardHeader
            title="Datos personales"
            titleStyle={{fontSize: '1.2rem'}}
            // subtitle="Subtitle"
            actAsExpander
            showExpandableButton
        />
        <CardText expandable>
            <form onSubmit={onSubmit} className="Section-form">
                {/*<h2 style={{width: '100%'}}>*/}
                {/*<small>Datos personales</small>*/}
                {/*</h2>*/}
                <TextField
                    // style={styles.item}
                    name="academicId"
                    value={profile.academicId}
                    onChange={handleProfileChange}
                    floatingLabelText="Numero de Cuenta"
                    hintText="244755"
                    type="number"
                    min={1}
                    max={999999}
                />
                <TextField
                    //style={styles.item}
                    name="given_name"
                    value={profile.given_name}
                    onChange={handleProfileChange}
                    floatingLabelText="Nombre(s)"
                    hintText="ej. Miguel"
                    maxLength={100}
                />
                <TextField
                    // style={styles.item}
                    name="surname"
                    value={profile.surname}
                    onChange={handleProfileChange}
                    floatingLabelText="Apellidos"
                    hintText="ej. González"
                    maxLength={100}
                />
                <SelectField
                    floatingLabelText="Género"
                    autoWidth={false}
                    value={profile.gender}
                    onChange={handleDropDownChange("gender")}
                    style={{marginTop: 14, width: 256}}
                >
                    <MenuItem value="M" primaryText="Masculino"/>
                    <MenuItem value="F" primaryText="Femenino"/>
                    <MenuItem value="U" primaryText="Prefiero no decir"/>
                </SelectField>
                <TextField
                    // style={styles.item}
                    name="nationality"
                    value={profile.nationality}
                    onChange={handleProfileChange}
                    floatingLabelText="Nacionalidad"
                    hintText="ej Mexicana"
                    maxLength={30}
                />
                <DatePicker
                    name="birth_date"
                    value={birth_date}
                    onChange={handleDatePickerChange("birth_date")}
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
                    maxLength={20}
                />
                <TextField
                    // style={styles.item}
                    name="passport_number"
                    value={profile.passport_number}
                    onChange={handleProfileChange}
                    floatingLabelText="Número de pasaporte"
                    hintText="ej G15XXXXXX"
                    maxLength={20}
                />
                <TextField
                    name="ssn_number"
                    value={profile.ssn_number}
                    onChange={handleProfileChange}
                    maxLength={20}
                    // style={styles.item}
                    floatingLabelText="Número de seguro social"
                    hintText="ej 13MD1323"
                />
                <DatePicker
                    name="ssn_expiry_date"
                    value={ssn_expiry_date}
                    onChange={handleDatePickerChange("ssn_expiry_date")}
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
                    maxLength={20}
                />
                <TextField
                    // style={styles.item}
                    name="secondary_email"
                    value={profile.secondary_email}
                    onChange={handleProfileChange}
                    floatingLabelText="Email alterno"
                    hintText="ej alguien@ejemplo.com"
                    type="email"
                    maxLength={100}
                />
                <TextField
                    // style={styles.item}
                    name="phone_number"
                    value={profile.phone_number}
                    onChange={handleProfileChange}
                    floatingLabelText="Teléfono fijo"
                    hintText="ej 7715677069"
                    type="tel"
                    pattern="[0-9]{10}"
                />
                <TextField
                    // style={styles.item}
                    name="cellphone_number"
                    value={profile.cellphone_number}
                    onChange={handleProfileChange}
                    floatingLabelText="Telefono móvil"
                    hintText="ej 7715677069"
                    type="tel"
                    pattern="[0-9]{10}"
                />
                <TextField
                    // style={styles.item}
                    name="about"
                    value={profile.about}
                    onChange={handleProfileChange}
                    floatingLabelText="Acerca de mí"
                    hintText="Soy ... me gusta ..."
                    maxLength={500}
                    multiLine={true}
                    rowsMax={6}
                />
                <SaveButton/>
                {/*<div style={{width:'100%', margin:'20px 10px 10px'}}>*/}
                {/*<IconButton tooltip="Guardar cambios" onClick={scrollToSave}>*/}
                {/*<IconSVG />*/}
                {/*</IconButton>*/}
                {/*</div>*/}
            </form>
        </CardText>
        {/*<CardActions>*/}
        {/*<FlatButton label="Action1"/>*/}
        {/*<FlatButton label="Action2"/>*/}
        {/*</CardActions>*/}
    </Card>
    // <Paper className="Paper-form" zDepth={3} >
    //
    // </Paper>
);