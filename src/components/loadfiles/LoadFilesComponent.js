import React, {Fragment} from "react";
import { Tabs, Tab, Paper, RaisedButton} from 'material-ui';
import {UploadFile} from "./UploadFile"

export const LoadFilesComponent = (props) => {
    return (
        <Paper className="Main-form-tp" zDepth={3}>
            <form  style={{textAlign:'left'}}>
                <UploadFile
                    fileName="CURP"
                    fileType=".pdf"
                    className="uploadfile"
                />
            </form>
        </Paper>
    );
};