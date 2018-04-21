import React, {Component} from "react";
import "./LoadFileStylesheet.css";
import {UploadFile} from "./UploadFile"




class LoadFilesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
//Es el contenedor
    //Pagina para cargar archivos
    // window.screen.availWidth * 0.60
    // window.screen.availHeight * 0.80
    render() {
        return (
            <div>
            <div className="Main-takepart">
                <embed
                    width={window.screen.availWidth * 0.60}
                    height={window.screen.availHeight * 0.80}
                    src="http://127.0.0.1:8000/media/documents/2018/04/20/8_Certificacion_idioma.pdf"
                />
                <div className="Main-LoadFiles">
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                </div>

            </div>
            </div>
        );
    }
}
export default LoadFilesPage;
