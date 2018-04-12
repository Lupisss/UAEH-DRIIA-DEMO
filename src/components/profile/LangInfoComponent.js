import React from "react";
import {
    Card,
    CardHeader,
    CardText,
    FlatButton,
    IconButton,
    IconMenu,
    List,
    ListItem,
    MenuItem
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, grey600} from "material-ui/styles/colors";



export const LangInfoComponent = ({ certifications = [], newCertification, deleteCertification, history}) => {
    const iconButtonElement = (
        <IconButton
            touch={true}
            tooltip="más"
            tooltipPosition="bottom-left"
        >
            <MoreVertIcon color={grey400}/>
        </IconButton>
    );
    let certificationsListItems = certifications.length > 0 ?
        certifications.map( (certification, key) => (
            <ListItem
                key={key}
                rightIconButton={(
                    <IconMenu iconButtonElement={iconButtonElement}>
                        <MenuItem onClick={()=>history.push(`/profile/certification/${certification.id}`)}>Editar</MenuItem>
                        <MenuItem onClick={()=>deleteCertification(certification.id)}>Eliminar</MenuItem>
                    </IconMenu>
                )}
                primaryText={
                    <p>
                        {certification.name }
                        <span
                            style={{color: grey600}}
                        >
                            {` ${certification.description}, Idioma: ${certification.language}`}
                            </span>
                    </p>
                }
            />
        ))
        :
        <ListItem
            rightIconButton={
                <FlatButton
                    label="Añadir nueva certificación"
                    onClick={newCertification}
                    primary
                />
            }
            primaryText="No cuentas con ninguna certificación"
        />
    ;
    return (
        <Card className="Section-languages" zDepth={3}>
            <CardHeader
                title="Certificaciones en lenguajes del alumno"
                titleStyle={{fontSize: '1.2rem'}}
                actAsExpander
                showExpandableButton
            />
            <CardText expandable>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <FlatButton
                        label="Añadir nueva certificación"
                        onClick={newCertification}
                        primary
                    />
                    {/*<FloatingActionButton*/}
                    {/*zDepth={3}*/}
                    {/*mini={true}*/}
                    {/*//className="Languages-AddButton"*/}
                    {/*onClick={newCertification}*/}
                    {/*>*/}
                    {/*<ContentAdd />*/}
                    {/*</FloatingActionButton>*/}
                </div>
                <div className="Languages-list">
                    <List>
                        {/*Pone las imagenes de las banderas en idioma*/}
                        {certificationsListItems}
                    </List>
                </div>
            </CardText>
        </Card>
    );
};