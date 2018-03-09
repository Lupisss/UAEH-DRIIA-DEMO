import React, {Component} from 'react';
import {
    Avatar,
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
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './ProfileStylesheet.css';
import Portada from './PortadaContainer';
import PersonalInformation from './PersonalInformationContainer';
import AddressInfo from './AddressInfoContainer';

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

        };
    }

    render() {
        return (
            <div className="Main-profile">
                <div className="Main-profile">
                    <Portada/>
                    {/*Formularios del perfil*/}
                    <div className="Profile-form">
                        <PersonalInformation/>
                        <AddressInfo/>
                        {/*Datos de tutor en el perfil*/}
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

                        {/*Información académica en perfil*/}
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

                        {/*Idiomas en perfil*/}
                        <Paper zDepth={3} className="Section-languages" >
                            <h2 style={{width:'100%'}}><small>Idiomas</small></h2>
                            {/*<CardTitle style={{width:'100%'}} subtitle="Datos del padre o tutor"/>*/}
                            <FloatingActionButton zDepth={3} mini={true} className="Languages-AddButton">
                                <ContentAdd />
                            </FloatingActionButton>
                            <div className="Languages-list">
                                <List>
                                    {/*Pone las imagenes de las banderas en idioma*/}
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

                    </div>
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

// const styles = {
//     item:{
//         boxSizing:'border-box',
//         margin: '0px 20px'
//     }
// };
export default ProfilePage;