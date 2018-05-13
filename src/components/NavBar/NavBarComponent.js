import React, {Fragment} from "react";
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
                {
                    userLogged &&
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <ExpandMoreIcon/>
                            </IconButton>
                        }
                    >
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