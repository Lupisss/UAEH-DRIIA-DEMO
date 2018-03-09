import React from "react";

const defaultImg = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";

export const PortadaDisplay = ({}) => (
    <div
        //foto de portada
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
                {/*Cambiar la foto de perfil*/}
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
);