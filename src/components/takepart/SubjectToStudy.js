import React from 'react';
import {TextField} from 'material-ui';

//Segunda fila del formulario
export const SubjectToStudy = ({onChange,subjectUAEH = {},index}) => {
    const {key = "", name = ""} = subjectUAEH;
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
                    style={{width:'15%'}}
                    floatingLabelText="Clave UAEH"
                    name="key"
                    value={key}
                    onChange={onChange(index)}
                />
                <TextField
                    value={name}
                    style={{width:'30%'}}
                    name="name"
                    floatingLabelText="Materia a homologar"
                    onChange={onChange(index)}
                />
            </div>
    );
};