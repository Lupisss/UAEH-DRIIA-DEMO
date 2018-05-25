import React from "react";
import {
    Paper,
    TextField
} from "material-ui";
import './PuPublicStylesheet.css';
import {Link} from "react-router-dom";


const defaultProfilePicture = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";
const defaultWallPicture = "https://static.pexels.com/photos/314563/pexels-photo-314563.jpeg";


export const PuProfileComponent = ({profile, user, tutor}) => {


    const toShow = [];
    for (let key in profile) {
        toShow.push({key: key, value: profile[key]});
    }
    const profileInfo = toShow.map(data => <p>{data.key + " : " + data.value}</p>);
    let addressesToShow = profile.addresses.map((address, key) => (
        <div style={{width: '100%'}}>
            <h4>{address.address1} {address.suburb} {address.city} {address.state} {address.country} {address.zip_code}</h4>
        </div>
    ));

    let certificationToShow = profile.certifications.map((certifications, key) => (
        <div style={{width: '100%'}}>
            <h4>Idioma: {certifications.language} Nivel: {certifications.name} {certifications.description} </h4>
        </div>
    ));
    const percentage = ((profile.credits_coursed * 100) / (profile.academic_program.total_number_of_credits)).toFixed(2) + "%";
    return (

        <div className="Main-profile">
            <div className="Main-profile">
                <div
                    className="profile-portada"
                    style={{
                        backgroundImage: profile.wallPicture ? `url('${profile.wallPicture}')` : `url(${defaultWallPicture})`,
                        backgroundSize: 'cover',
                        backgroundColor: '#777'
                    }}
                >
                    <figure>
                        <img
                            src={profile.profilePicture ? profile.profilePicture : defaultProfilePicture}
                            alt="user"
                        />
                    </figure>
                </div>
                {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}


                <div className="Profile-form ">
                    <h1> {profile.surname} {profile.given_name} </h1>
                    {profile.nationality === 'Mexicana' || "mexicana" ? <h2>México</h2> :
                        profile.nationality === 'Española' || 'española' ? <h2>España</h2> :
                            ""}
                    <h3>{profile.about}</h3>
                    <h4> {profile.academicId}</h4>
                    {/* <h3> Nacionalidad: {profile.nationality} </h3>*/}
                    <h5> {profile.cellphone_number} </h5>


                    <Paper style={{backgroundColor: "#901B00", color: "white"}} zDepth={3} className="prueba1">

                        {/* <Paper zDepth={2} className="prueba1" >*/}
                        <h2 style={{width: '100%'}}>
                            <small>DATOS PERSONALES</small>
                        </h2>
                        {profile.gender === "M" ? <p>Género: Masculino</p> : profile.gender === "F" ?
                            <p>Género: Femenino</p> : <p>Género: Indefinido</p>}
                        <p> Fecha de nacimiento: {profile.birth_date} </p>
                        <p> CURP: {profile.curp} </p>
                        <p> Número de Seguro Social: {profile.ssn_number} </p>
                        <p> Expiración de Seguro Social: {profile.ssn_expiry_date} </p>
                        <p> Clave de Elector: {profile.vote_key} </p>
                        <p> Teléfono Fijo: {profile.phone_number} </p>
                        <p> Email Alterno: {profile.secondary_email} </p>

                    </Paper>

                    {/*++++++++++++++++++++++++++++++++++++++++*/}
                    <Paper style={{backgroundColor: "#901B00", color: "white"}} zDepth={3} className="prueba1">
                        <h2 style={{width: '100%'}}>
                            <small>DIRECCIÓN</small>
                        </h2>
                        {addressesToShow}


                    </Paper>

                    <Paper style={{backgroundColor: "#901B00", color: "white"}} zDepth={4} className="prueba1">
                        <h2 style={{width: '100%'}}>
                            <small>DATOS DEL PADRE O TUTOR</small>
                        </h2>

                        <p> Tutor: {tutor.full_name}</p>

                        {tutor.address &&
                        <p> Dirección: {tutor.address.address1} {tutor.address.suburb} {tutor.address.city} {tutor.address.state} {tutor.address.country} {tutor.address.zip_code}</p>}
                        {tutor.address && <p> Email: {tutor.email}</p>}

                        {tutor.relationship === "M" ? <p>Parentesco: Madre</p> : tutor.relationship === "F" ?
                            <p>Parentesco: Padre</p> :
                            tutor.relationship === "GM" ? <p>Parentesco: Abuela</p> : tutor.relationship === "GF" ?
                                <p>Parentesco: Abuelo</p> :
                                tutor.relationship === "U" ? <p>Parentesco: Tío</p> : tutor.relationship === "A" ?
                                    <p>Parentesco: Tía</p> : ""}

                        <p> Teléfono: {tutor.phone_number}</p>
                        <p> Celular: {tutor.cellphone_number}</p>

                    </Paper>


                    {
                        profile.academic_program &&
                        <Paper style={{backgroundColor: "#901B00", color: "white"}} zDepth={5} className="prueba1">
                            <h2 style={{width: '100%'}}>
                                <small>INFORMACIÓN ACADÉMICA ACTUAL</small>
                            </h2>


                            <p> {profile.academic_program.department.name} </p>
                            <p> Programa educativo: {profile.academic_program.name} </p>
                            <p> Número de semestres: {profile.academic_program.number_of_semesters}</p>
                            <p> Semestre actual:{profile.current_semester}</p>
                            <p> Promedio general: {profile.grade}</p>
                            <p> Número total de creditos:{profile.academic_program.total_number_of_credits}</p>
                            <p> Creditos cursados: {profile.credits_coursed}</p>

                            <p> Porcentaje de créditos cursados: {percentage}</p>

                        </Paper>
                    }


                    <Paper style={{backgroundColor: "#901B00", color: "white"}} zDepth={3} className="prueba1">
                        <h2 style={{width: '100%'}}>
                            <small>IDIOMAS</small>
                        </h2>

                        {certificationToShow}

                    </Paper>

                    <Link to={`/documents/${profile.id}`}>
                        <Paper style={{backgroundColor: "#901B00", color: "white"}} zDepth={5} className="prueba1">
                            <h2 style={{width: '100%'}}>
                                <small>VER DOCUMENTOS</small>
                            </h2>
                        </Paper>
                    </Link>
                </div>
            </div>
        </div>

    );
};