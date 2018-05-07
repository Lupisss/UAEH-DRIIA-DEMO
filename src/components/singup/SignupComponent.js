import React from "react";
import {Paper, RaisedButton, TextField} from "material-ui";
import {Link} from 'react-router-dom';
//Crear un usuario
export const SignupComponent = ({
                                    user:{given_name, email, surname, password, password2},
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
                    floatingLabelText="Nombre(s)"
                    value={given_name}
                    name="given_name"
                    onChange={onChange}
                    required={true}
                />
                <TextField
                    fullWidth={true}
                    hintText="ej.Reyes"
                    floatingLabelText="Apellido(s)"
                    value={surname}
                    name="surname"
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
                {/*Boton para registrar*/}
                <RaisedButton disabled={ !ok } fullWidth={true} label="Registrar" primary={true} type="submit" />
            </form>
            <br/>
            <span style={{marginTop: 20}}>¿Ya tiene una cuenta? {' '}
                <Link to="/login">
                        Inicie sesión.
                    </Link>
                </span>
        </Paper>
    );
};