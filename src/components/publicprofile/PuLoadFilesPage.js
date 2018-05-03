import React, {Component, Fragment} from "react";
import "./PuLoadFiles.css";
import {Avatar, IconMenu, List, ListItem, RaisedButton} from 'material-ui';
import {MainLoader} from "../loader/Loader"
import {connect} from "react-redux";
import {PuUploadFile} from "./PuUploadFile";
import Done from 'material-ui/svg-icons/action/done';
import Lack from 'material-ui/svg-icons/content/clear';
import {green500} from 'material-ui/styles/colors';
import {Link} from "react-router-dom";

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


class PuLoadFilesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeCurrentDocument : "",
            fileName : "" ,
            url: "",
            fileToUpload: {

            }
        };
    }
    //
    viewDocument = (requirement) => {
        let url = "";
        const document = this.props.documents.filter( document => document.code == requirement.code )[0];
        if(document) url = document.docfile;
        this.setState({codeCurrentDocument:requirement.code,url, fileName:requirement.name})
    };

    render() {
        const {fetched} = this.props;
        const {url,fileName} = this.state;
        const list = listOfRequirements.map( (requirement,index) => {
            const document = this.props.documents.filter( document => document.code == requirement.code )[0];
            return (
                <ListItem
                    key={index}
                    leftAvatar={
                        <Avatar
                            backgroundColor={document ? green500 : ""}
                            icon={document ? <Done/> : <Lack/> }
                            size={15}
                        />
                    }
                    rightIconButton={document ? (
                        <di> </di>
                    ):null}
                    primaryText={requirement.name}
                    onClick={() => this.viewDocument(requirement)}
                />
            )
        });
        console.log(url);
        return (
            <Fragment>
                {
                    !fetched ? <MainLoader/> :
                        <div className="Container-Load-Files">
                            { url === "" ?
                                <PuUploadFile
                                    fileName={fileName}
                                    fileType=".pdf"
                                    uploadFile={this.uploadFile}
                                />
                                :
                                <object
                                    onLoad={()=>console.log("Cargando")}
                                    data={url}
                                    type="application/pdf"
                                    width="100%"
                                    height="100%"
                                >
                                    <p>
                                        <b>Example fallback content</b>
                                        : This browser does not support PDFs. Please download the PDF to view it:
                                        <a href={url}>Download PDF</a>.
                                    </p>
                                </object>
                            }
                            <div className="Main-LoadFiles">
                                <List style={{backgroundColor: '#FFF'}}>
                                    {list}
                                </List>

                                <Link to="/public">
                                    <RaisedButton label="Regresar al perfil" primary={true} className="boton"/>
                                </Link>

                            </div>

                        </div>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user : state.user.info,
    documents: state.documents.list,
    fetched: state.documents.areFetched
});

PuLoadFilesPage = connect(mapStateToProps)(PuLoadFilesPage);
export default PuLoadFilesPage;
