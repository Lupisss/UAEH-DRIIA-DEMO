import React from "react";
import {RaisedButton} from 'material-ui';

export const SaveButton = () => (
    <div className="SaveButton">
        <RaisedButton
            label="Guardar cambios"
            primary
            type="submit"
        />
    </div>
);