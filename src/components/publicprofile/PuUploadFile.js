import React, {Fragment} from "react";
import {IconButton, Paper} from "material-ui";
import AddFileIcon from "material-ui/svg-icons/action/note-add";
import FontAwesome from 'react-fontawesome';

let inputFile;

const IconSize ={
    width: 36, height:36
};

const IconStyle = {
    width: 40, height:40, padding: 2
};

export const PuUploadFile = (props) => {
    const handleClick = () => {
        inputFile.click();
    };


    return (
        <Paper className="container-uploadfile" zDepth={5} >
            <div>
                {   props.fileName &&
                <Fragment>
                    <h2>{props.fileName}</h2>

                </Fragment>
                }
                <p style={!props.fileName ? { fontSize:'2em'} : {}}>
                    {
                        props.fileName ?
                            "Sin archivos" :
                            "Selecciona un archivo"
                    }
                </p>
            </div>
        </Paper>
    );
};