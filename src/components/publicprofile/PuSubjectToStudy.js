import React from 'react';
import {TextField} from 'material-ui';

//Segunda fila del formulario
export const PuSubjectToStudy = ({onChange,subjectUAEH = {},index,handleHomoChange,homoName,homo}) => {
    const {key = "", name = ""} = subjectUAEH;
    return (
            <div className="Options">
                <TextField
                    style={{width:'10%'}}
                    floatingLabelText="Clave"
                    name={"key"}
                    value={homo.key}
                    onChange={handleHomoChange(homoName)}
                    maxLength={10}
                    disabled
                />
                <TextField
                    style={{width:'30%'}}
                    floatingLabelText="Materia a cursar"
                    name={"name"}
                    value={homo.name}
                    onChange={handleHomoChange(homoName)}
                    maxLength={100}
                    disabled
                />
                <TextField
                    style={{width:'15%'}}
                    floatingLabelText="Clave UAEH"
                    name="key"
                    value={key}
                    onChange={onChange(index)}
                    maxLength={10}
                    disabled
                />
                <TextField
                    value={name}
                    style={{width:'30%'}}
                    name="name"
                    floatingLabelText="Materia a homologar"
                    onChange={onChange(index)}
                    maxLength={100}
                    disabled
                />
            </div>
    );
};