import React from 'react';
import { AutoComplete, TextField} from 'material-ui';

export const Options = ({index, dataSource}) => {
    return (
        <div className="Options">
            <p style={{color:'gray'}}>{index}</p>
            <AutoComplete
                floatingLabelText="Universidad"
                filter={AutoComplete.fuzzyFilter}
                dataSource={dataSource}
                maxSearchResults={5}
            />
            <TextField
                floatingLabelText="País"
                disabled={true}
                value="USA"
            />
            <TextField
                floatingLabelText="Programa académico a cursar"
            />

        </div>
    );
};