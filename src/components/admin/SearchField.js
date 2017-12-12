import React from 'react';
import {TextField} from "material-ui";

export const SearchField = ({...props}) => {
    return (
        <div className="search">
            <TextField
                {...props}
            />
        </div>
    );
};