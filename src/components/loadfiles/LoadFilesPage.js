import React, {Component, Fragment} from "react";
import "./LoadFileStylesheet.css";
import {Avatar, IconButton, IconMenu, List, ListItem, MenuItem} from 'material-ui';
import {MainLoader} from "../loader/Loader"
import {connect} from "react-redux";
import {newFile, deleteFile} from '../../redux/actions/fileActions';
import {UploadFile} from "./UploadFile";
import Done from 'material-ui/svg-icons/action/done';
import Lack from 'material-ui/svg-icons/content/clear';
import {green500, grey400} from 'material-ui/styles/colors';
import toastr from "toastr";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="más"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

let inputFile ;
class LoadFilesPage extends Component {
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

    uploadFile = e => {
        //this.setState({loadingPictures:true});
        let fileToUpload = Object.assign({}, this.state.fileToUpload);
        let file = e.target.files[0];
        if (file) {
            if (file.size > 3000000) {
                console.log('Too big');
                toastr.error('El archivo debe ser menor a 3MB');
                return;
            }
            const reader = new window.FileReader();

            reader.onload = ( file => e => {
                console.log("el file", file);
                let toSend = new FormData();
                toSend.append("name",this.state.fileName);
                toSend.append("code",this.state.codeCurrentDocument);
                toSend.append("docfile",file, this.state.fileName + ".pdf");
                toSend.append("profile", this.props.user.profile.id);
                console.log(toSend);
                this.props.newFile(toSend)
                    .then(r=>{
                        console.log("Esto recibo",r);
                        toastr.success("Documento añadido")
                        this.viewDocument({name: r.name , code: r.code})
                    })
                    .catch(e=>{
                        console.log(e);
                        toastr.error("Algo salió mal")
                    })
            })(file);

            reader.readAsDataURL(file);
        }


    };

    deleteFile = document => {
        this.props.deleteFile(document.id)
            .then(r=>{
                console.log("Esto recibo",r);
                toastr.warning("Eliminado");
                this.viewDocument({name: document.name , code: document.code})
            })
            .catch(e=>{
                console.log(e);
                toastr.error("Algo salió mal")
            })
    };

// <embed
// ref={ref => this.embed = ref}
// width={window.screen.availWidth * 0.60}
// height={window.screen.availHeight * 0.80}
// src={url}
// />

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
                        <IconMenu iconButtonElement={iconButtonElement}>
                            {/*TODO finish edit*/}
                            {/*<MenuItem onClick={()=>{this.viewDocument(document); inputFile.click()}}>Editar</MenuItem>*/}
                            <MenuItem onClick={()=>this.deleteFile(document)}>Eliminar</MenuItem>
                        </IconMenu>
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
                            <UploadFile
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
                        </div>
                        <input
                            onChange={()=>toastr.success("Editado")}
                            accept=".pdf"
                            ref={input =>{inputFile=input}}
                            type="file"
                            hidden
                            formEncType="multipart/form-data"
                        />
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

LoadFilesPage = connect(mapStateToProps, {newFile,deleteFile})(LoadFilesPage);
export default LoadFilesPage;
