import React from "react";
import {Paper, RaisedButton, TextField} from "material-ui";

export const SignupComponent = ({
                                    user:{name, email, lastName, password, password2},
                                    onSubmit,
                                    onChange,
                                    errors
}) => {
    const {password:ePass = '',password2: ePass2 = ''} = errors;
    const ok = Object.keys(errors).length === 0;
    console.log(ok);
    return (
        <Paper className="Main-form" zDepth={3}>
            <form onSubmit={onSubmit} >
                <TextField
                    fullWidth={true}
                    hintText="ej. Guadalupe"
                    floatingLabelText="Nombre"
                    value={name}
                    name="name"
                    onChange={onChange}
                    required={true}
                />
                <TextField
                    fullWidth={true}
                    hintText="ej.Reyes"
                    floatingLabelText="Apellido"
                    value={lastName}
                    name="lastName"
                    onChange={onChange}
                    required={true}
                />
                <TextField
                    fullWidth={true}
                    hintText="lupiz_1810@hotmail.com"
                    type="email"
                    floatingLabelText="Correo electrónico"
                    value={email}
                    name="email"
                    onChange={onChange}
                    required={true}
                />
                <TextField
                    fullWidth={true}
                    type="password"
                    floatingLabelText="Contraseña"
                    value={password}
                    name="password"
                    onChange={onChange}
                    errorText={ePass}
                    pattern="^\d*[a-zA-Z]{1,}\d*"
                    required={true}
                />
                <TextField
                    fullWidth={true}
                    type="password"
                    floatingLabelText="Confirmar contraseña"
                    value={password2}
                    name="password2"
                    onChange={onChange}
                    errorText={ePass2}
                    required={true}
                />
                <RaisedButton disabled={ !ok } fullWidth={true} label="Registrar" primary={true} type="submit" />
            </form>
        </Paper>
    );
};