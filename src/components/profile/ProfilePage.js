import React, {Component} from 'react';
import {
    Avatar,
    DatePicker,
    DropDownMenu,
    IconButton,
    IconMenu,
    List,
    ListItem,
    MenuItem,
    Paper,
    RaisedButton,
    Subheader,
    TextField
} from "material-ui";
import {darkBlack, grey400} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {MapModal} from "../common/MapModal";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PlacesAutocomplete from 'react-places-autocomplete';
//import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';
import './ProfileStylesheet.css';
const defaultImg = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="más"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            address:{
                lat:20.1324695,
                lng:-98.8009663,
                text:''
            },
            addressField: 'San Francisco, CA'
        };
        this.onChange = addressField => this.setState({ addressField });

    }

    onDrag = (e) => {
        let {address} = this.state;
        address.lat = e.latLng.lat();
        address.lng = e.latLng.lng();

        const googleMaps = window.google.maps;
        const geocoder = new googleMaps.Geocoder();
        geocoder.geocode({'location': address},
            r=>{
                console.log(r);
                address.text = r[0].formatted_address;
            }
        );
        console.log(geocoder);


        this.setState({address});
        //   console.log(this.state.address);
        // console.log(e);
    };

    handleClose = () => {
        this.setState({modalOpen: false});
    };

    handleOpen = () => {
        this.setState({modalOpen: true});
    };

    render() {
        const {modalOpen, address} = this.state;
        const inputProps = {
            value: this.state.addressField,
            onChange: this.onChange,
        };
        const cssClasses = {
            root: 'group',
            input: 'inputmui',
            //autocompleteContainer: 'my-autocomplete-container'
        };
        console.log(this.context.muiTheme);
        return (
            <div className="Main-profile">
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
                                // style={styles.item}
                                floatingLabelText="Numero de Cuenta"
                                hintText="244755"
                            />
                            <TextField
                                //style={styles.item}
                                floatingLabelText="Nombre(s)"
                                hintText="ej. Miguel"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Apellido Paterno"
                                hintText="ej. González"
                            />
                            <TextField
                                // style={styles.item}
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
                                // style={styles.item}
                                floatingLabelText="Nacionalidad"
                                hintText="ej Mexicana"
                            />
                            <DatePicker
                                floatingLabelText="Fecha de nacimiento"
                                autoOk={true}
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Curp"
                                hintText="ej GODM90290995HDFNRG06"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Número de pasaporte"
                                hintText="ej G15XXXXXX"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Número de seguro social"
                                hintText="ej 13MD1323"
                            />
                            <DatePicker
                                floatingLabelText="Vigencia del seguro social"
                                autoOk={true}
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Clave de Elector"
                                hintText="ej GSDH45654XXXX"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Email alterno"
                                hintText="ej alguien@ejemplo.com"
                                type="email"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Teléfono fijo"
                                hintText="ej 771 567 XX XX"
                                type="tel"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Telefono móvil"
                                hintText="ej 771 567 XX XX"
                                type="tel"
                            />
                        </Paper>

                        <Paper zDepth={3} className="Section-map" >
                            <h2 style={{width:'100%'}}><small>Dirección</small></h2>
                            <div>
                                <RaisedButton
                                    primary={true}
                                    label="Ver mapa"
                                    onClick={this.handleOpen}
                                />
                            </div>
                            <TextField
                                style={styles.item}
                                multiLine={true}
                                rowsMax={3}
                                name="text"
                                value={address.text}
                                //disabled={true}
                            />
                            <MapModal
                                address={address}
                                handleClose={this.handleClose}
                                onDrag={this.onDrag}
                                open={modalOpen}/>
                            <PlacesAutocomplete
                                inputProps={inputProps}
                                classNames={cssClasses}
                            />
                        </Paper>

                        <Paper zDepth={3} className="Section-form" >
                            <h2 style={{width:'100%'}}><small>Datos del padre o tutor</small></h2>
                            {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Nombre completo"
                                hintText="ej Miguel R. Gonzalez Duron"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Dirección"
                                hintText="ej Cipres 104 Pachuca de Soto, Hidalgo"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Email"
                                hintText="ej algo@ejemplo.com"
                            />
                            <DropDownMenu autoWidth={false} value={2} style={{marginTop:14, width: 256}} >
                                <Subheader>Parentesco</Subheader>
                                <MenuItem value={2} primaryText="Madre"/>
                                <MenuItem value={3} primaryText="Padre"/>
                                <MenuItem value={4} primaryText="Tío"/>
                                <MenuItem value={4} primaryText="Madrastra"/>
                            </DropDownMenu>

                            <TextField
                                // style={styles.item}
                                floatingLabelText="Teléfono fijo"
                                hintText="ej 771 567 XX XX"
                                type="tel"
                            />
                            <TextField
                                // style={styles.item}
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
                                // style={styles.item}
                                floatingLabelText="Promedio general"
                                hintText="ej 9.79"
                                type="text"
                                pattern="^\d?\d?\.\d?\d?$"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Número de semestres"
                                hintText="ej 9"
                                type="number"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Semestre actual"
                                hintText="ej 7"
                                type="number"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Número total de créditos"
                                hintText="ej 226"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Número de créditos cubiertos"
                                hintText="ej 163.5"
                            />
                            <TextField
                                // style={styles.item}
                                floatingLabelText="Porcentaje de créditos"
                                hintText="ej 72.5"
                            />
                        </Paper>

                        <Paper zDepth={3} className="Section-languages" >
                            <h2 style={{width:'100%'}}><small>Idiomas</small></h2>
                            {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                            <FloatingActionButton zDepth={3} mini={true} className="Languages-AddButton">
                                <ContentAdd />
                            </FloatingActionButton>
                            <div className="Languages-list">
                                <List>
                                    <ListItem
                                        leftAvatar={<Avatar src="http://noticias.universia.es/net/images/educacion/l/le/let/lets-talk-gafes-cometidas-escrita-fala-ingles-noticias.jpg" />}
                                        rightIconButton={rightIconMenu}
                                        primaryText="Inglés"
                                        secondaryText={
                                            <p>
                                                <span style={{color: darkBlack}}>580 pts </span>
                                                Certificación TOEFL iTP
                                            </p>
                                        }
                                    />
                                    <ListItem
                                        leftAvatar={<Avatar src="http://www.banderas-mundo.es/data/flags/big/fr.png" />}
                                        rightIconButton={rightIconMenu}
                                        primaryText="Francés"
                                        secondaryText={
                                            <p>
                                                <span style={{color: darkBlack}}>B2 </span>
                                                Certificación
                                            </p>
                                        }
                                    />
                                </List>
                            </div>
                        </Paper>

                    </form>
                    {
                        this.props.publicProfile &&
                        <Paper>
                            <TextField multiLine={true} rowsMax={6} floatingLabelText="Message"/>
                            <RaisedButton label="Enviar"/>
                        </Paper>
                    }

                </div>
            </div>
        );
    }
}

const styles = {
    item:{
        boxSizing:'border-box',
        margin: '0px 20px'
    }
};
export default ProfilePage;