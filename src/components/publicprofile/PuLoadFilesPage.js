import React, {Component} from "react";
import "./PuLoadFiles.css";
import {PuUploadFile} from "./PuUploadFile"
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12,
    labelColor: "white"
};

class PuLoadFilesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


//Es el contenedor
    //Pagina para cargar archivos
    render() {
        return (
            <div className="Main-takepart">
                <div className="Main-PuLoadFiles">
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="Acta de Nacimiento"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="Tira de Materias"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="Carta de Postulación"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="Solicitud de Participación"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="Certificado de Ingles"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="Exposición de Motivos"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="Certificado Médico"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />
                    <PuUploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </div>

                <div>
                <RaisedButton label="Regresar" backgroundColor= "#901B00" labelColor="white"  href="/public" />
                </div>

            </div>

        );
    }
}
export default PuLoadFilesPage;
