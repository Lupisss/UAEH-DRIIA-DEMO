import React from "react";
import {IconButton} from "material-ui";
import AddFileIcon from "material-ui/svg-icons/action/note-add";

let inputFile;

const IconSize ={
    width: 48, height:48, padding: 4
};

export const UploadFile = (props) => {
    const handleClick = () => {
        inputFile.click();
    };
    return (
        <div className={props.className}>
            <input accept={props.fileType} ref={input =>{inputFile=input}} type="file" hidden/>
            <IconButton iconStyle={IconSize} onClick={handleClick}>
                <AddFileIcon/>
            </IconButton>
            <p>{props.fileName}</p>
        </div>
    );
};