import React from 'react';
import { Subheader, Paper, RaisedButton} from 'material-ui';
import {Options} from "./Options";

export const TakePartComponent = ({props}) => {
    return (
        <Paper className="Main-form-tp" zDepth={3}>
            <form  style={{textAlign:'left'}}>
                <div>
                    <h2 style={{marginLeft:50}}><small>Universidades Destino <span style={{color:'gray'}}><small>Selecciona tus opciones</small></span></small></h2>
                </div>
                <Options
                    index={"1ra"}
                    dataSource={colleges}
                />
                <Options
                    index={"2da"}
                    dataSource={colleges}
                />
                <Options
                    index={"3ra"}
                    dataSource={colleges}
                />
                <div>
                    <RaisedButton
                        style={{margin:'15px 60px'}}
                        primary={true}
                        label="Enviar solicitud"
                    />
                </div>
            </form>
        </Paper>
    );
};

const colleges = [
    'MISSOURI SOUTHERN STATE UNIVERSITY',
    'THE UNIVERSITY OF TEXAS AT ARLINGTON',
    'INDIANA UNIVERSITY',
];