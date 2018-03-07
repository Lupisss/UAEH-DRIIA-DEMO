import React from "react";
import {
    Paper,
    TextField
} from "material-ui";
import './PuPublicStylesheet.css';

const defaultImg = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";

export const PuProfileComponent = (props) => {
    return (

         <div >
                <div
                    className="profile-portada"
                    style={{backgroundImage:`url('https://static.pexels.com/photos/314563/pexels-photo-314563.jpeg')`, backgroundColor:'white'}}
                >
                    <figure>
                        <img

                            src={defaultImg}
                            alt="user"
                         />
                    </figure>
                </div>
                {/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}

                 <div className="Profile-form " >

                    <Paper zDepth={3} className="prueba1" >

                    {/* <Paper zDepth={2} className="prueba1" >*/}
                        <h2  style={{width:'100%'}} ><small>Datos personales</small></h2>

                        <TextField  disabled style={{width:'33%'}}
                            // style={styles.item}
                                    value="Cuenta"

                        />

                        <TextField disabled style={{width:'33%'}}
                            // style={styles.item}
                                   value="Apellido Paterno"
                        />

                        <TextField disabled style={{width:'33%'}}
                            // style={styles.item}
                            value="Apellido Materno"
                        />

                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Nombre"
                        />

                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Genero"
                        />

                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Nacionalidad"
                        />
                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Fecha de Nacimiento"
                        />
                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Curp"
                        />

                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Número de pasaporte"
                        />
                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Número de seguro social"
                        />

                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Vigencia del seguro social"
                        />

                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Clave de Elector"
                        />
                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Email alterno"
                        />
                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Teléfono fijo"
                        />
                        <TextField disabled style={{width:'33%'}}
                            //style={styles.item}
                                   value="Telefono móvil"
                        />
                </Paper>





                    {/*++++++++++++++++++++++++++++++++++++++++*/}
                 <Paper zDepth={3} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>Dirección</small></h2>

                        <TextField
                            disabled style={{width:'80%'}}
                            //style={styles.item}
                            value="Dirección"
                        />
                 </Paper>

                    <Paper zDepth={4} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>Datos del padre o tutor</small></h2>
                        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Nombre"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Dirección"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Email"
                        />

                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Parentesco"
                        />

                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Teléfono fijo"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Telefono móvil"
                        />
                 </Paper>


                    <Paper zDepth={5} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>Información académica actual</small></h2>
                        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Instituto"
                        />

                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Programa educativo"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Promedio general"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Número de semestres"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Semestre actual"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Número total de créditos"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Número de créditos cubiertos"
                        />
                        <TextField disabled style={{width:'80%'}}
                            //style={styles.item}
                                   value="Porcentaje de créditos"
                        />
                </Paper>


                    <Paper zDepth={3} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>Idiomas</small></h2>
                        {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}

                        <div >
                            <TextField disabled style={{width:'80%'}}
                                //style={styles.item}
                                       value="Idioma"
                            />
                            <TextField disabled style={{width:'80%'}}
                                //style={styles.item}
                                       value="Puntos"
                            />
                        </div>
                </Paper>

                    <Paper zDepth={5} className="prueba1" >
                        <h2 style={{width:'100%'}}><small>Ver documentos</small></h2>
                </Paper>
                </div>
            </div>

    );
};