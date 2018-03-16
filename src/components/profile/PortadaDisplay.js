import React from "react";

const defaultImg = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";

let profPic;
let wallPic;

function changeProfilePic() {
    profPic.click();
}

function changeWallPic() {
    wallPic.click();
}

export const PortadaDisplay = ({profile,changePicture}) => {
    const backImg = profile.wallPicture ? `url(${profile.wallPicture})` : "url('https://static.pexels.com/photos/314563/pexels-photo-314563.jpeg')";
    return (
        <div
            //foto de portada
            className="profile-portada"
            style={{backgroundImage: backImg, backgroundColor:'white', backgroundSize:'cover'}}
        >
            <button
                onClick={changeWallPic}
            >
                {/*loading ? <CircularProgress/> : "Cambiar Portada"*/}
                Cambiar Portada
            </button>
            <input accept="image/*" name='image' ref={input => wallPic = input } type="file" hidden onChange={changePicture("wallPicture")}/>
            <figure>
                <div
                    onClick={changeProfilePic}
                >
                    {/*Cambiar la foto de perfil*/}
                    <span>Cambiar Foto</span>
                </div>
                <img
                    //src={photoURL ? photoURL:defaultImg}
                    src={profile.profilePicture ? profile.profilePicture : defaultImg}
                    alt="user"
                    onClick={changeProfilePic}
                />
                <input accept="image/*" name='image' ref={input => profPic = input } type="file" hidden onChange={changePicture("profilePicture")}/>
                {/*<input accept="image/*" ref={input=>secondInput=input} onChange={changePic} hidden type="file"/>*/}
            </figure>
            {/*<input accept="image/*" ref={input=>theInput=input} onChange={changeCover} hidden type="file"/>*/}
        </div>
    )
};