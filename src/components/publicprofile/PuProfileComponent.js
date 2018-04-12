import React from "react";
import {
    Paper,
    TextField
} from "material-ui";
import './PuPublicStylesheet.css';


const defaultImg = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";

export const PuProfileComponent = ({profile, user}) => {
    const toShow = [];
    for( let key in profile){
        toShow.push({key : key, value:  profile[key]});
    }
    const profileInfo = toShow.map( data => <p>{data.key + " : " + data.value}</p>);
    return (

         <div className="Main-profile" >
             <div className="Main-profile">
                <div
                    className="profile-portada"
                    style={{backgroundImage:`url('${profile.wallPicture}')`, backgroundColor:'#A9F5E1'}}
                >
                    <figure>
                        <img

                            src={profile.profilePicture}
                            alt="user"
                         />
                    </figure>
                </div>
                {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}




                 <div className="Profile-form " >
                     <h1> {user.last_name} {user.first_name} </h1>
                     <h2> {profile.academicId}</h2>
                     <h3> Nacionalidad: {profile.nationality} </h3>
                     <h4> {profile.cellphone_number} </h4>


                    <Paper style={{backgroundColor: "#901B00", color: "white"}} zDepth={3} className="prueba1" >

                    {/* <Paper zDepth={2} className="prueba1" >*/}
                        <h2  style={{width:'100%'}} ><small>DATOS PERSONALES</small></h2>
                        <p > Genero: {profile.gender} </p>
                        <p> Fecha de nacimiento: {profile.birth_date} </p>
                        <p> CURP: {profile.curp} </p>
                        <p> Número de Seguro Social: {profile.ssn_number} </p>
                        <p> Expiración de Seguro Social: {profile.ssn_expiry_date} </p>
                        <p> Clave de Elector: {profile.vote_key} </p>
                        <p> Teléfono Fijo: {profile.phone_number} </p>
                        <p> Email Alterno: {profile.secondary_email} </p>




                        {/*{profileInfo}

                        <h3  > {profile.academicId}</h3>
                        <h4> {user.last_name} {user.first_name} </h4>


                       <TextField disabled style={{width:'29%'}}
                            // style={styles.item}
                                   value={user.last_name}
                        />

                        <TextField disabled style={{width:'29%'}}
                            // style={styles.item}
                                   value={user.first_name}
                        />

                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Nombre"
                        />



                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Genero"
                        />

                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Nacionalidad"
                        />
                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Fecha de Nacimiento"
                        />
                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Curp"
                        />

                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Número de seguro social"
                        />

                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Vigencia del seguro social"
                        />



                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Clave de Elector"
                        />

                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Teléfono fijo"
                        />
                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Telefono móvil"
                        />
                        <TextField disabled style={{width:'29%'}}
                            //style={styles.item}
                                   value="Email alterno"
                        /> */}

                </Paper>





                    {/*++++++++++++++++++++++++++++++++++++++++*/}
                 <Paper zDepth={3} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>DIRECCIÓN</small></h2>

                        <TextField
                            disabled style={{width:'80%'}}
                            //style={styles.item}
                            value="Dirección"
                        />
                 </Paper>

                    <Paper zDepth={4} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>DATOS DEL PADRE O TUTOR</small></h2>

                        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Nombre"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Dirección"
                        />
                        <TextField disabled style={{width:'40%'}}
                            //style={styles.item}
                                   value="Email"
                        />

                        <TextField disabled style={{width:'40%'}}
                            //style={styles.item}
                                   value="Parentesco"
                        />

                        <TextField disabled style={{width:'40%'}}
                            //style={styles.item}
                                   value="Teléfono fijo"
                        />
                        <TextField disabled style={{width:'40%'}}
                            //style={styles.item}
                                   value="Telefono móvil"
                        />
                 </Paper>


                    <Paper zDepth={5} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>INFORMACIÓN ACADÉMICA ACTUAL</small></h2>
                        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                        <TextField disabled style={{width:'40%'}}
                            //style={styles.item}
                                   value="Instituto"
                        />

                        <TextField disabled style={{width:'40%'}}
                            //style={styles.item}
                                   value="Programa educativo"
                        />
                        <TextField disabled style={{width:'26.6%'}}
                            //style={styles.item}
                                   value="Promedio general"
                        />
                        <TextField disabled style={{width:'26.6%'}}
                            //style={styles.item}
                                   value="Número de semestres"
                        />
                        <TextField disabled style={{width:'26.6%'}}
                            //style={styles.item}
                                   value="Semestre actual"
                        />
                        <TextField disabled style={{width:'26.6%'}}
                            //style={styles.item}
                                   value="Número total de créditos"
                        />
                        <TextField disabled style={{width:'26.6%'}}
                            //style={styles.item}
                                   value="Número de créditos cubiertos"
                        />
                        <TextField disabled style={{width:'26.6%'}}
                            //style={styles.item}
                                   value="Porcentaje de créditos"
                        />
                </Paper>


                    <Paper zDepth={3} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>IDIOMAS</small></h2>
                        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}

                        <div >
                            <TextField disabled style={{width:'40%'}}
                                //style={styles.item}
                                       value="Idioma"
                            />
                            <TextField disabled style={{width:'40%'}}
                                //style={styles.item}
                                       value="Puntos"
                            />
                        </div>
                </Paper>

                    <Paper zDepth={5} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>VER DOCUMENTOS</small></h2>
                </Paper>
                </div>
            </div>
         </div>

    );
};