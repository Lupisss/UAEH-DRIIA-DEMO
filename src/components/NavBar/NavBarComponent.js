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

export const NavBarComponent = ({logOut}) => {
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
                <Link to="/profile">
                    <RaisedButton label="Mi perfil" primary={true}/>
                </Link>
                <IconMenu
                    iconButtonElement={
                        <IconButton touch={true}>
                            <ExpandMoreIcon/>
                        </IconButton>
                    }
                >
                    <MenuItem containerElement={ <Link to="/login"/> } primaryText="Iniciar sesión" />
                    <MenuItem containerElement={ <Link to="/takePart"/> } primaryText="Iniciar proceso" />
                    <MenuItem containerElement={ <Link to="/loadFiles"/> } primaryText="Subir archivos" />
                    <MenuItem containerElement={ <Link to="/admin"/> } primaryText="Administrar" />
                    <MenuItem onClick={logOut} containerElement={ <Link to="/"/> } primaryText="Cerrar sesión" />

                </IconMenu>
            </ToolbarGroup>
        </Toolbar>
    );
};