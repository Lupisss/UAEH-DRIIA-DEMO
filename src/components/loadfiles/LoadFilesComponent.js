import React, {Fragment} from "react";
import { Tabs, Tab, Paper, RaisedButton} from 'material-ui';
import {UploadFile} from "./UploadFile"

const style = {
    height: 125,
    width: 125,
    margin: 30,
    textAlign: 'center',
    display: 'inline-block',
};

export const LoadFilesComponent = (props) => {
    return (
        <div>
            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

            <form   style={{textAlign:'justify'}} >

                <UploadFile
                    fileName="CURP"
                    fileType=".pdf"
                    className="uploadfile"
                />

            </form>

        </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'center'}} >

                    <UploadFile
                        fileName="Acta de Nacimiento"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>

            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="Tira de Materias"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>

            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="Carta de Postulación"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="Solicitud de Participación"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="Certificado de Ingles"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="Exposición de Motivos"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>

            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="Certificado Médico"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>

            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>

            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>

            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>


            <Paper  className="Main-form-tp"  style={style} zDepth={4} circle={true} >

                <form   style={{textAlign:'left'}} >

                    <UploadFile
                        fileName="CURP"
                        fileType=".pdf"
                        className="uploadfile"
                    />

                </form>

            </Paper>




        </div>

    );
};
