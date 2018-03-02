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
    render() {
        return (
            <div className="Main-takepart">
                <div className="Main-LoadFiles">
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="Acta de Nacimiento"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="Tira de Materias"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="Carta de Postulación"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="Solicitud de Participación"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="Certificado de Ingles"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="Exposición de Motivos"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="Certificado Médico"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                </div>
            </div>
        );
    }
}
export default LoadFilesPage;
