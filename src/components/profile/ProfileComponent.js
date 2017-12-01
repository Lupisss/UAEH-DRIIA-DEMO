import React from 'react';
import {
    DatePicker,
    TextField,
    DropDownMenu,
    MenuItem,
    Paper,
    //CardTitle,
    //AutoComplete,
    List,
    ListItem,
    RaisedButton
} from "material-ui";

const defaultImg = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";

export const ProfileComponent = ({props}) => {
    return (
        <div className="Main-profile">
            <div
                className="profile-portada"
                style={{backgroundImage:`url('https://static.pexels.com/photos/314563/pexels-photo-314563.jpeg')`, backgroundColor:'white'}}
            >
                <button
                    //onClick={clickCover}
                >
                    {/*loading ? <CircularProgress/> : "Cambiar Portada"*/}
                    Cambiar Portada
                </button>
                <figure>
                    <div
                        //onClick={clickPic}
                    >
                        <span>Cambiar Foto</span>
                    </div>
                    <img
                        //src={photoURL ? photoURL:defaultImg}
                        src={defaultImg}
                        alt="user"
                    />
                    {/*<input accept="image/*" ref={input=>secondInput=input} onChange={changePic} hidden type="file"/>*/}
                </figure>
                {/*<input accept="image/*" ref={input=>theInput=input} onChange={changeCover} hidden type="file"/>*/}
            </div>
            <form className="Profile-form">
                <Paper zDepth={3} className="Section-form" >
                    <h2 style={{width:'100%'}} ><small>Datos personales</small></h2>
                    <TextField
                        floatingLabelText="Numero de Cuenta"
                        hintText="244755"
                    />
                    <TextField
                        floatingLabelText="Nombre(s)"
                        hintText="ej. Miguel"
                    />
                    <TextField
                        floatingLabelText="Apellido Paterno"
                        hintText="ej. González"
                    />
                    <TextField
                        floatingLabelText="Apellido Materno"
                        hintText="ej. Durón"
                    />
                    <DropDownMenu autoWidth={false} value={1} style={{marginTop:14, width: 256}} >
                        <MenuItem value={1} primaryText="Género" disabled={true}/>
                        <MenuItem value={2} primaryText="Masculino"/>
                        <MenuItem value={3} primaryText="Femenino"/>
                        <MenuItem value={4} primaryText="Prefiero no decir"/>
                    </DropDownMenu>
                    <TextField
                        floatingLabelText="Nacionalidad"
                        hintText="ej Mexicana"
                    />
                    <DatePicker
                        floatingLabelText="Fecha de nacimiento"
                        autoOk={true}
                    />
                    <TextField
                        floatingLabelText="Curp"
                        hintText="ej GODM90290995HDFNRG06"
                    />
                    <TextField
                        floatingLabelText="Número de pasaporte"
                        hintText="ej G15XXXXXX"
                    />
                    <TextField
                        floatingLabelText="Número de seguro social"
                        hintText="ej 13MD1323"
                    />
                    <DatePicker
                        floatingLabelText="Vigencia del seguro social"
                        autoOk={true}
                    />
                    <TextField
                        floatingLabelText="Clave de Elector"
                        hintText="ej GSDH45654XXXX"
                    />
                    <TextField
                        floatingLabelText="Email alterno"
                        hintText="ej alguien@ejemplo.com"
                        type="email"
                    />
                    <TextField
                        floatingLabelText="Teléfono fijo"
                        hintText="ej 771 567 XX XX"
                        type="tel"
                    />
                    <TextField
                        floatingLabelText="Telefono móvil"
                        hintText="ej 771 567 XX XX"
                        type="tel"
                    />
                </Paper>

                <Paper zDepth={3} className="Section-form" >
                    <h2 style={{width:'100%'}}><small>Dirección</small></h2>
                    <TextField

                    />
                </Paper>

                <Paper zDepth={3} className="Section-form" >
                    <h2 style={{width:'100%'}}><small>Datos del padre o tutor</small></h2>
                    {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                    <TextField
                        floatingLabelText="Nombre completo"
                        hintText="ej Miguel R. Gonzalez Duron"
                    />
                    <TextField
                        floatingLabelText="Dirección"
                        hintText="ej Cipres 104 Pachuca de Soto, Hidalgo"
                    />
                    <TextField
                        floatingLabelText="Email"
                        hintText="ej algo@ejemplo.com"
                    />
                    <DropDownMenu autoWidth={false} value={1} style={{marginTop:14, width: 256}} >
                        <MenuItem value={1} primaryText="Parentesco" disabled={true}/>
                        <MenuItem value={2} primaryText="Madre"/>
                        <MenuItem value={3} primaryText="Padre"/>
                        <MenuItem value={4} primaryText="Tío"/>
                        <MenuItem value={4} primaryText="Madrastra"/>
                    </DropDownMenu>

                    <TextField
                        floatingLabelText="Teléfono fijo"
                        hintText="ej 771 567 XX XX"
                        type="tel"
                    />
                    <TextField
                        floatingLabelText="Telefono móvil"
                        hintText="ej 771 567 XX XX"
                        type="tel"
                    />
                </Paper>

                <Paper zDepth={3} className="Section-form" >
                    <h2 style={{width:'100%'}}><small>Información académica actual</small></h2>
                    {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                    <DropDownMenu autoWidth={false} value={2} style={{marginTop:14, width: 256}} >
                        <MenuItem value={1} primaryText="Instituto" disabled={true}/>
                        <MenuItem value={2} primaryText="ICBI"/>
                        <MenuItem value={3} primaryText="ICEA"/>
                        <MenuItem value={4} primaryText="ICSa"/>
                    </DropDownMenu>
                    <DropDownMenu autoWidth={false} value={2} style={{marginTop:14, width: 256}} >
                        <MenuItem value={1} primaryText="Programa educativo" disabled={true}/>
                        <MenuItem value={2} primaryText="Lic en Ciencias Computacionales"/>
                        <MenuItem value={3} primaryText="Lic en Ingenieria Civil"/>
                        <MenuItem value={4} primaryText="Lic en Arquitectura"/>
                    </DropDownMenu>
                    <TextField
                        floatingLabelText="Promedio general"
                        hintText="ej 9.79"
                        type="text"
                        pattern="^\d?\d?\.\d?\d?$"
                    />
                    <TextField
                        floatingLabelText="Numero de semestres"
                        hintText="ej 9"
                        type="number"
                    />
                    <TextField
                        floatingLabelText="Semestre actual"
                        hintText="ej 7"
                        type="number"
                    />
                    <TextField
                        floatingLabelText="Número total de créditos"
                        hintText="ej 226"
                    />
                    <TextField
                        floatingLabelText="Número de créditos cubiertos"
                        hintText="ej 163.5"
                    />
                    <TextField
                        floatingLabelText="Porcentaje de créditos"
                        hintText="ej 72.5"
                    />
                </Paper>

                <Paper zDepth={3} className="Section-form" >
                    <h2 style={{width:'100%'}}><small>Idiomas</small></h2>
                    {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                    <div className="Languages-list">
                        <List>
                            <ListItem primaryText="Ingles"/>
                            <ListItem primaryText="Frances"/>
                        </List>
                    </div>
                </Paper>

                <RaisedButton primary={true} label="Guardar"/>

            </form>
        </div>
    );
};