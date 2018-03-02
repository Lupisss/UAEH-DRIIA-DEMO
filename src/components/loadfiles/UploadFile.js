import React from "react";
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
        <div className="container-uploadfile">
            <Paper  className={props.className} zDepth={5} circle={true} >
                    <input accept={props.fileType} ref={input =>{inputFile=input}} type="file" hidden/>
                    <IconButton iconStyle={IconSize} style={IconStyle} onClick={handleClick}>
                        <AddFileIcon/>
                     </IconButton>
                    <p style={{margin:0}}>{props.fileName}</p>
            </Paper>
        </div>
    );
};