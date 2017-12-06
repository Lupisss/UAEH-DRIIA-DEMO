import React, {Fragment} from "react";
import { Tabs, Tab, Paper, RaisedButton} from 'material-ui';
import {UploadFile} from "./UploadFile"

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export const LoadFilesComponent = (props) => {
    return (
        <div>
            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                    fileName="CURP"
                    fileType=".pdf"
                    className="uploadfile"
                />

                </form>

            </Paper>
        </div>
    );
};
