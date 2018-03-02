import React from 'react';
import {TextField} from "material-ui";
// Crea el campo de busqueda
export const SearchField = ({...props}) => {
    return (
        <div className="search">
            <TextField
                {...props}
            />
        </div>
    );
};