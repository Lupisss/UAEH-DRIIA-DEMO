import React from "react";
import {
    IconButton,
    IconMenu,
    MenuItem,
    RaisedButton,
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from "material-ui";
import ExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import {Link} from "react-router-dom";


//menú pricipal, arriba
export const NavBarComponent = ({logOut,user,userLogged}) => {
    return (
        <Toolbar className="NavBar">
           <ToolbarGroup>
               <IconButton touch={true}>
                   <MenuIcon/>
               </IconButton>
           </ToolbarGroup>
            <ToolbarGroup>
                <Link to="/" style={{textDecoration:"none", color: '#919191'}} >
                    <ToolbarTitle text="UAEH DRIIA"/>
                </Link>
                <ToolbarSeparator/>
                {
                    userLogged ?
                        <Link to="/profile">
                            <RaisedButton label="Mi perfil" primary={true}/>
                        </Link> :
                        <Link to="/login">
                            <RaisedButton label="Iniciar sesión" primary={true}/>
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
                        <MenuItem containerElement={ <Link to="/takePart"/> } primaryText="Iniciar proceso" />
                        <MenuItem containerElement={ <Link to="/loadFiles"/> } primaryText="Subir archivos" />
                        <MenuItem onClick={logOut} containerElement={ <Link to="/"/> } primaryText="Cerrar sesión" />
                        {
                            user.is_staff &&
                            <MenuItem containerElement={ <Link to="/admin"/> } primaryText="Administrar" />
                        }

                    </IconMenu>
                }

            </ToolbarGroup>
        </Toolbar>
    );
};