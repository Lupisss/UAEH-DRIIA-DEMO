import React from 'react';
import {DatePicker, TextField, DropDownMenu, MenuItem} from "material-ui";

const defaultImg = "https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg";

export const ProfileComponent = ({}) => {
    return (
        <div className="Main-profile">
            <div
                className="profile-portada"
                style={{backgroundImage:`url('https://static.pexels.com/photos/314563/pexels-photo-314563.jpeg')`}}
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
                    floatingLabelText="Curp"
                    hintText="ej GODM90290995HDFNRG06"
                />
                <TextField
                    floatingLabelText="Número de seguro social"
                    hintText="ej 13MD1323"
                />
                <DatePicker
                    floatingLabelText="Vigencia del seguro social"
                    hintText="ej GODM90290995HDFNRG06"
                    autoOk={true}
                />

            </form>
        </div>
    );
};