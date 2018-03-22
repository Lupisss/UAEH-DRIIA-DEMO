import React, {Fragment} from "react";
import {DropDownMenu, MenuItem, Paper, Subheader, TextField} from "material-ui";

export const TutorInfoForm = ({tutor: {full_name, email, relationship, phone_number, cellphone_number}}) => (
    <Paper zDepth={3} className="Paper-form" >
        <div className="Section-form">
            <h2 style={{width:'100%'}}><small>Datos del padre o tutor</small></h2>
            {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
            <TextField
                // style={styles.item}
                name="full_name"
                value={full_name}
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
                name="email"
                value={email}
                floatingLabelText="Email"
                hintText="ej algo@ejemplo.com"
            />
            <DropDownMenu
                autoWidth={false}
                value={relationship}
                style={{marginTop:14, width: 256}}
            >
                <Subheader>Parentesco</Subheader>
                <MenuItem value="GM" primaryText="Abuela"/>
                <MenuItem value="GF" primaryText="Abuelo"/>
                <MenuItem value="M" primaryText="Madre"/>
                <MenuItem value="F" primaryText="Padre"/>
                <MenuItem value="U" primaryText="Tío"/>
                <MenuItem value="A" primaryText="Tía"/>
            </DropDownMenu>

            <TextField
                // style={styles.item}
                name="phone_number"
                value={phone_number}
                floatingLabelText="Teléfono fijo"
                hintText="ej 771 567 XX XX"
                type="tel"
            />
            <TextField
                // style={styles.item}
                name="cellphone_number"
                value={cellphone_number}
                floatingLabelText="Telefono móvil"
                hintText="ej 771 567 XX XX"
                type="tel"
            />
        </div>
    </Paper>
);