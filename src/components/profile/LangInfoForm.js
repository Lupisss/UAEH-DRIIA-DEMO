import React from "react";
import {darkBlack, grey400} from "material-ui/styles/colors";
import {Avatar, FloatingActionButton, IconButton, IconMenu, List, ListItem, MenuItem, Paper} from "material-ui";
import ContentAdd from 'material-ui/svg-icons/content/add';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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

export const LangInfoForm = () => (
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
);