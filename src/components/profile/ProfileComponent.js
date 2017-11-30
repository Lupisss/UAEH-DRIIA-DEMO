import React from 'react';
import {TextField} from "material-ui";
const defaultImg = "https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg";
export const ProfileComponent = ({}) => {
    return (
        <div>
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
            <form>
                <TextField
                    floatingLabelText="Numero de Cuenta"
                    hintText="244755"
                />
                <TextField
                    floatingLabelText="Nombre(s)"
                    hintText="ej. Miguel"
                />
                <TextField
                    floatingLabelText="Nombre(s)"
                    hintText="ej. Miguel"
                />
            </form>
        </div>
    );
};