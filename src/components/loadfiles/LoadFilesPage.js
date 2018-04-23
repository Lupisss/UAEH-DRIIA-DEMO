import React, {Component} from "react";
import "./LoadFileStylesheet.css";
import {List, ListItem}  from 'material-ui';
import {UploadFile} from "./UploadFile"

const listOfRequirements = [
    {name: "Documento de terminos y condiciones", code: "DTC"},
    {name: "Constancia de calificaciones", code: "CCP"},
    {name: "Tira de materias", code: "TMA"},
    {name: "Historial académico", code: "HAC"},
    {name: "Carta de postulación", code: "CPO"},
    {name: "Certificación de idioma", code: "CID"},
    {name: "Pasaporte", code: "PAS"},
    {name: "Carta de exposicion de motivos", code: "CEM"},
    {name: "Carta de recomendación", code: "CRE"},
    {name: "Certificado médico", code: "CME"},
    {name: "Cartilla nacional de Salud", code: "CNS"},
    {name: "Credencial elector", code: "CEL"},
    {name: "Acta de Nacimiento", code: "ANA"},
    {name: "CURP", code: "CUR"},
    {name: "CV", code: "CVI"},
    {name: "Hoja Apertura", code: "HAP"},
];




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
        const list = listOfRequirements.map( (requirement,index) =>
            <ListItem key={index} primaryText={requirement.name} />
        );
        return (
            <div className="Container-Load-Files">
                <embed
                    onLoad={()=>console.log("Cargando")}
                    width={window.screen.availWidth * 0.60}
                    height={window.screen.availHeight * 0.80}
                    src="http://127.0.0.1:8000/media/documents/2018/04/20/8_Certificacion_idioma.pdf"
                />
                <div className="Main-LoadFiles">
                    <List style={{backgroundColor:'#FFF'}}>
                        {list}
                    </List>
                    {/*<UploadFile*/}
                        {/*fileName="CURP"*/}
                        {/*fileType=".pdf"*/}
                        {/*className="uploadfile"*/}
                    {/*/>*/}

                </div>
            </div>
        );
    }
}
export default LoadFilesPage;
