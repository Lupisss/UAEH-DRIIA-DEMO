import React from "react";
import {
    Card,
    CardHeader,
    CardText,
    FlatButton,
    FloatingActionButton,
    IconButton,
    IconMenu,
    List,
    ListItem,
    MenuItem
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {grey400, grey600} from "material-ui/styles/colors";



export const AddressInfoComponent = ({addresses = [], newAddress, deleteAddress, history}) => {
    const iconButtonElement = (
        <IconButton
            touch={true}
            tooltip="más"
            tooltipPosition="bottom-left"
        >
            <MoreVertIcon color={grey400}/>
        </IconButton>
    );
    let adressesListItems = addresses.length > 0 ?
        addresses.map( (address, key) => (
            <ListItem
                key={key}
                rightIconButton={(
                    <IconMenu iconButtonElement={iconButtonElement}>
                        <MenuItem onClick={()=>history.push(`/profile/address/${address.id}`)}>Editar</MenuItem>
                        <MenuItem onClick={()=>deleteAddress(address.id)}>Eliminar</MenuItem>
                    </IconMenu>
                )}
                primaryText={
                    <p>
                        {address.address1 + " " + address.suburb}
                        <span
                            style={{color: grey600}}
                        >
                            {` ${address.city}, ${address.state}, ${address.country}, CP: ${address.zip_code}`}
                            </span>
                    </p>
                }
            />
        ))
        :
        <ListItem
            rightIconButton={
                <FlatButton
                    label="Añadir nueva dirección"
                    onClick={newAddress}
                    primary
                />
            }
            primaryText="No cuentas con ninguna dirección"
        />
    ;
    return (
        <Card className="Section-languages" zDepth={3}>
            <CardHeader
                title="Direcciones del alumno"
                titleStyle={{fontSize: '1.2rem'}}
                actAsExpander
                showExpandableButton
            />
            <CardText expandable>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <FlatButton
                        label="Añadir nueva dirección"
                        onClick={newAddress}
                        primary
                    />
                    {/*<FloatingActionButton*/}
                        {/*zDepth={3}*/}
                        {/*mini={true}*/}
                        {/*//className="Languages-AddButton"*/}
                        {/*onClick={newAddress}*/}
                    {/*>*/}
                        {/*<ContentAdd />*/}
                    {/*</FloatingActionButton>*/}
                </div>
                <div className="Languages-list">
                    <List>
                        {/*Pone las imagenes de las banderas en idioma*/}
                        {adressesListItems}
                    </List>
                </div>
            </CardText>
        </Card>
    );
};