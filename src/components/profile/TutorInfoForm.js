import React, {Fragment} from "react";
import {
    DropDownMenu,
    MenuItem,
    Card,
    CardHeader,
    CardTitle,
    CardText,
    Subheader,
    TextField, SelectField, Divider, FlatButton
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
        onSubmit,
        isSearched,
        currentColonia,
        tutorAddress: {codigo_postal, estado, municipio, calleNumero},
        getAddress,
        handleTutorAddressChange,
        updateTutorAddress,
        handleDropDownTutoAddChange,
        dataDropDown
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
                        maxLength={100}
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
                        maxLength={60}
                    />
                    <SelectField
                        autoWidth={false}
                        value={relationship}
                        onChange={onDropDown("relationship")}
                        style={{marginTop: 14, width: 256}}
                        floatingLabelText={"Parentesco"}
                    >
                        <MenuItem value="GM" primaryText="Abuela"/>
                        <MenuItem value="GF" primaryText="Abuelo"/>
                        <MenuItem value="M" primaryText="Madre"/>
                        <MenuItem value="F" primaryText="Padre"/>
                        <MenuItem value="U" primaryText="Tío"/>
                        <MenuItem value="A" primaryText="Tía"/>
                    </SelectField>

                    <TextField
                        // style={styles.item}
                        name="phone_number"
                        value={phone_number}
                        onChange={onChange}
                        floatingLabelText="Teléfono fijo"
                        hintText="ej 7715671213"
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength={10}
                    />
                    <TextField
                        // style={styles.item}
                        name="cellphone_number"
                        value={cellphone_number}
                        onChange={onChange}
                        floatingLabelText="Telefono móvil"
                        hintText="ej 7715671213"
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength={10}
                    />
                    {/* TODO make functionality */}
                    {/*<SaveButton/>*/}
                </form>
                <span style={{width:'60%', marginTop:20, marginBottom: 10}}>{""}</span>
                <p style={{fontSize: '1.2rem', width: '100%'}}>Dirección del tutor</p>
                <form onSubmit={getAddress} className="zip-address-search">
                    <TextField
                        name="codigo_postal"
                        value={codigo_postal}
                        floatingLabelText="Código postal"
                        onChange={handleTutorAddressChange}
                        required
                        pattern="[0-9]{5}"
                        maxLength={5}
                        hintText={"ej 42119"}
                        //onBlur={this.getAddress}
                    />
                    <div>
                        <FlatButton
                            label="Buscar"
                            //onClick={getAddress}
                            type="submit"
                            primary
                        />
                    </div>
                </form>
                <form onSubmit={updateTutorAddress} id="addAddress" className="zip-address-extend">
                    <TextField
                        name="codigo_postal"
                        value={codigo_postal}
                        disabled
                        floatingLabelText="Código Postal"
                        //onBlur={this.getAddress}
                    />
                    <SelectField
                        onChange={handleDropDownTutoAddChange}
                        autoWidth={false}
                        value={currentColonia}
                        style={{marginTop: 14, width: 256}}
                        floatingLabelText={"Colonia"}
                    >
                        {dataDropDown}
                    </SelectField>
                    <TextField
                        name="estado"
                        value={estado}
                        floatingLabelText="Estado"
                        disabled
                    />
                    <TextField
                        name="municipio"
                        value={municipio}
                        floatingLabelText="Municipio"
                        disabled
                    />
                    <TextField
                        name="calleNumero"
                        value={calleNumero}
                        onChange={handleTutorAddressChange}
                        floatingLabelText="Calle y Número"
                        style={{width:'80%'}}
                        maxLength={100}
                        required
                    />
                    <SaveButton/>
                </form>
            </CardText>
        </Card>

    )
};