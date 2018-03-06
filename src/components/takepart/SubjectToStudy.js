import React from 'react';
import {TextField} from 'material-ui';

//Segunda fila del formulario
export const SubjectToStudy = ({props}) => {
    return (
            <div className="Options">
                <TextField
                    style={{width:'10%'}}
                    floatingLabelText="Clave"
                />
                <TextField
                    style={{width:'30%'}}
                    floatingLabelText="Materia a cursar"
                />
                <TextField
                    style={{width:'10%'}}
                    floatingLabelText="Clave UAEH"
                />
                <TextField
                    style={{width:'30%'}}
                    floatingLabelText="Materia a homologar"
                />
            </div>
    );
};