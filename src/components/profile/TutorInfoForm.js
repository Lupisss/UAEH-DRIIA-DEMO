import React, {Fragment} from "react";
import {
    DropDownMenu,
    MenuItem,
    Card,
    CardHeader,
    CardTitle,
    CardText,
    Subheader,
    TextField
} from "material-ui";
import {SaveButton} from "./SaveButton";

export const TutorInfoForm = (
    {
        tutor: {
            full_name,
            email,
            relationship,
            phone_number,
            cellphone_number,
            address
        },
        onChange,
        onDropDown,
        onSubmit
    }
) => {
    return (
        <Card className="Paper-form" zDepth={3}>
            <CardHeader
                title="Datos del padre o tutor"
                titleStyle={{fontSize: '1.2rem'}}
                // subtitle="Subtitle"
                actAsExpander
                showExpandableButton
            />
            <CardText expandable>
                <form className="Section-form" onSubmit={onSubmit}>
                    <TextField
                        // style={styles.item}
                        name="full_name"
                        value={full_name}
                        onChange={onChange}
                        floatingLabelText="Nombre completo"
                        hintText="ej Miguel R. Gonzalez Duron"
                    />
                    {/*<TextField*/}
                    {/*// style={styles.item}*/}
                    {/*floatingLabelText="Dirección"*/}
                    {/*hintText="ej Cipres 104 Pachuca de Soto, Hidalgo"*/}
                    {/*/>*/}
                    <TextField
                        // style={styles.item}
                        name="email"
                        value={email}
                        type="email"
                        onChange={onChange}
                        floatingLabelText="Email"
                        hintText="ej algo@ejemplo.com"
                    />
                    <DropDownMenu
                        autoWidth={false}
                        value={relationship}
                        onChange={onDropDown("relationship")}
                        style={{marginTop: 14, width: 256}}
                    >
                        <Subheader>Parentesco</Subheader>
                        <MenuItem value="GM" primaryText="Abuela"/>
                        <MenuItem value="GF" primaryText="Abuelo"/>
                        <MenuItem value="M" primaryText="Madre"/>
                        <MenuItem value="F" primaryText="Padre"/>
                        <MenuItem value="U" primaryText="Tío"/>
                        <MenuItem value="A" primaryText="Tía"/>
                    </DropDownMenu>

                    <TextField
                        // style={styles.item}
                        name="phone_number"
                        value={phone_number}
                        onChange={onChange}
                        floatingLabelText="Teléfono fijo"
                        hintText="ej 771 567 XX XX"
                        type="tel"
                    />
                    <TextField
                        // style={styles.item}
                        name="cellphone_number"
                        value={cellphone_number}
                        onChange={onChange}
                        floatingLabelText="Telefono móvil"
                        hintText="ej 771 567 XX XX"
                        type="tel"
                    />
                    <TextField
                        // style={styles.item}
                        name="address.address1"
                        value={address.address1}
                        onChange={onChange}
                        floatingLabelText="Calle y número"
                        hintText="ej. Cipres 104"
                    />
                    <TextField
                        // style={styles.item}
                        name="address.suburb"
                        value={address.suburb}
                        onChange={onChange}
                        floatingLabelText="Colonia"
                        hintText="ej. Los Arrayanes"
                    />
                    <TextField
                        // style={styles.item}
                        name="address.city"
                        value={address.city}
                        onChange={onChange}
                        floatingLabelText="Ciudad"
                        hintText="ej. Pachuca"
                    />
                    {/*<p>{JSON.stringify(address)}</p>*/}
                    <SaveButton/>
                </form>
            </CardText>
        </Card>

    )
};