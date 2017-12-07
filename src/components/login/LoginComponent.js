import React from "react";
import {Link} from "react-router-dom";
import {TextField, RaisedButton, Paper} from "material-ui";

export const LoginComponent = (props) => {
    return (
        <Paper className="Main-form" zDepth={3}>
            <form onSubmit={props.onSubmit} >
                <TextField
                    fullWidth={true}
                    hintText="ej. lupiz_1810@hotmail.com"
                    type="email"
                    floatingLabelText="Correo electronico"
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
                <RaisedButton fullWidth={true} label="Iniciar sesión" primary={true} type="submit" />

            </form>


            <span style={{marginTop: 20}}>¿No tiene una cuenta?
            <Link to="/signup">
                 Cree una.
            </Link>
            </span>
        </Paper>
    );
};