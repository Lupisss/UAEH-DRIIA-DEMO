import React from "react";
import {
    Toolbar, ToolbarGroup, ToolbarTitle, IconMenu, IconButton, MenuItem, RaisedButton,
    ToolbarSeparator
} from "material-ui";
import ExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import {Link} from "react-router-dom";

export const NavBarComponent = (props) => {
    return (
        <Toolbar>
           <ToolbarGroup>
               <IconButton touch={true}>
                   <MenuIcon/>
               </IconButton>
           </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarTitle text="UAEH DRIIA"/>
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

                </IconMenu>
            </ToolbarGroup>
        </Toolbar>
    );
};