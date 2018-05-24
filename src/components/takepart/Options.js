import React from 'react';
import {AutoComplete, MenuItem, SelectField, TextField} from 'material-ui';
//formulario de universidad de destino
//primera fila del formulario
export const Options = ({index, dataSource, option: {college,country,academicProgram}, handleCollegeOptionChange, optionName,handleOptionChange}) => {
    const collegesOptions = dataSource.map((field, index) =>
        <MenuItem key={index} value={field.id} primaryText={field.name}/>
    );
    return (
        <div className="Options">
            {/*<p style={{color:'gray'}}>{index}</p>*/}
            {/*<AutoComplete*/}
                {/*floatingLabelText="Universidad"*/}
                {/*filter={AutoComplete.fuzzyFilter}*/}
                {/*dataSource={dataSource}*/}
                {/*maxSearchResults={10}*/}
            {/*/>*/}
            <SelectField
                autoWidth
                floatingLabelText={"Universidad"}
                maxHeight={400}
                value={college}
                onChange={handleCollegeOptionChange(optionName)}
            >
                {collegesOptions}
            </SelectField>
            <TextField
                floatingLabelText="Código de país"
                disabled={true}
                value={country}
            />
            <TextField
                floatingLabelText="Programa académico a cursar"
                value={academicProgram}
                name={"academicProgram"}
                onChange={handleOptionChange(optionName)}
            />
        </div>
    );
};

