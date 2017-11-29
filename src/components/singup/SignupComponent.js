import React from "react";
import {TextField, RaisedButton, Paper} from "material-ui";

export const SignupComponent = (props) => {
    console.log("Mira como cambia el state", props.user);
    return (
        <Paper className="Main-form" zDepth={3}>
            <form onSubmit={props.onSubmit} >
                <TextField
                    fullWidth={true}
                    hintText="ej. Guadalupe"
                    floatingLabelText="Nombre"
                    value={props.user.name}
                    name="name"
                    onChange={props.onChange}
                />
                <TextField
                    fullWidth={true}
                    hintText="ej.Reyes"
                    floatingLabelText="Apellido"
                    value={props.user.lastName}
                    name="lastName"
                    onChange={props.onChange}
                />
                <TextField
                    fullWidth={true}
                    hintText="lupiz_1810@hotmail.com"
                    type="email"
                    floatingLabelText="Correo electrónico"
                    value={props.user.email}
                    name="email"
                    onChange={props.onChange}
                />
                <TextField
                    fullWidth={true}
                    type="password"
                    floatingLabelText="Contraseña"
                    value={props.user.password}
                    name="password"
                    onChange={props.onChange}
                />
                <TextField
                    fullWidth={true}
                    type="password"
                    floatingLabelText="Confirmar contraseña"
                    value={props.user.password2}
                    name="password2"
                    onChange={props.onChange}
                />
                <RaisedButton fullWidth={true} label="Registrar" primary={true} type="submit" />
            </form>
        </Paper>
    );
};