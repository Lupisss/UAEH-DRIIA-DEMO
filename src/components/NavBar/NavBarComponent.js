import React, {Fragment} from "react";
import {
    IconButton,
    IconMenu,
    MenuItem,
    RaisedButton,
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle,
    Avatar
} from "material-ui";
import ExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import {Link} from "react-router-dom";

const style = {
    color: "#919191",
    fontSize: '0.9em',
    marginLeft: 15
};

const defaultImg = "http://www.nlsgrp.co/wp-content/uploads/2016/06/Brian-Avatar.png";

const Title  = (props) => (
    <p style={props.style}>{props.children}</p>
);

//menú pricipal, arriba
export const NavBarComponent = ({logOut,user,userLogged}) => {
    let userText = "";
    let srcImg = defaultImg;
    if (user) {
        if ( user.profile )  {
            userText = `${user.profile.given_name} ${user.profile.surname}`;
            srcImg = user.profile.profilePicture ? user.profile.profilePicture : defaultImg;
        }
    }
    return (
        <Toolbar className="NavBar">
           <ToolbarGroup>
               <Link to="/" style={{textDecoration:"none", color: '#919191'}} >
                   <ToolbarTitle text="UAEH DRIIA"/>
               </Link>
           </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarSeparator/>
                {
                    userLogged ?
                        user.is_staff ?
                            <Link to="/admin">
                                <RaisedButton label="Administrar" primary={true}/>
                            </Link> :
                            <Link to="/profile">
                                <RaisedButton label="Mi perfil" primary={true}/>
                            </Link>:
                        <Link to="/login">
                            <RaisedButton label="Iniciar sesión" primary={true}/>
                        </Link>
                }
                { Object.keys(user).length > 0 && !user.is_staff  &&
                    <Link to={"/profile"}>
                        <Avatar src={srcImg} style={{marginLeft: 15, cursor: 'pointer'}}/>
                    </Link>
                }
                {
                    userLogged &&
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <ExpandMoreIcon/>
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText={userText} disabled/>
                        {
                            !user.is_staff &&
                            <MenuItem containerElement={<Link to="/takePart"/>} primaryText="Iniciar proceso"/>
                        }
                        {
                            !user.is_staff &&
                            <MenuItem containerElement={ <Link to="/loadFiles"/> } primaryText="Subir archivos" />

                        }

                        <MenuItem onClick={logOut} containerElement={ <Link to="/"/> } primaryText="Cerrar sesión" />

                    </IconMenu>
                }

            </ToolbarGroup>
        </Toolbar>
    );
};