import React, {Fragment} from "react";
import {IconButton, Paper} from "material-ui";
import AddFileIcon from "material-ui/svg-icons/action/note-add";

let inputFile;

const IconSize ={
    width: 36, height:36
};

const IconStyle = {
    width: 40, height:40, padding: 2
};

export const UploadFile = (props) => {
    const handleClick = () => {
        inputFile.click();
    };


    return (
            <Paper className="container-uploadfile" zDepth={5} >
                    <div>
                        {   props.fileName &&
                            <Fragment>
                                <h2>{props.fileName}</h2>
                                <input
                                    onChange={props.uploadFile}
                                    accept={props.fileType}
                                    ref={input =>{inputFile=input}}
                                    type="file"
                                    hidden
                                    formEncType="multipart/form-data"
                                />
                                <IconButton iconStyle={IconSize} style={IconStyle} onClick={handleClick}>
                                    <AddFileIcon/>
                                </IconButton>
                            </Fragment>
                        }
                        <p style={!props.fileName ? { fontSize:'2em'} : {}}>
                        {
                            props.fileName ?
                                "Subir archivo" :
                                "Selecciona un archivo"
                        }
                        </p>
                    </div>
            </Paper>
    );
};