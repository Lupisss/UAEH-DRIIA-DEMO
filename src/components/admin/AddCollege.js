import React from 'react';
import {Dialog, DropDownMenu, MenuItem, RaisedButton, TextField} from 'material-ui';

/* declara las constantes para cada pais (como un id)*/
//elementos jx estos son nombre = "valor" siempre entre comillas
const USA = 'US';
const CANADA = 'CA';
const MEXICO = 'MX';
const CUBA = 'CU';
const REP_DOM = 'RD';
const COSTA_RICA = 'CR';
const COLOMBIA = 'CO';
const ECUADOR = 'EC';
const BRASIL = 'BR';
const BOLIVIA = 'BV';
const CHILE = 'CH';
const ARGENTINA = 'AR';
const URUGUAY = 'UR';
const PORTUGAL = 'PO';
const SPAIN = 'SP';
const FRANCIA = 'FR';
const ITALIA = 'IT';
const ALEMANIA = 'GR';
const REPUBLICA_CHECA = 'RC';
const HUNGRIA = 'HU';
const POLONIA = 'POL';
const FINLANDIA = 'FIN';
const CHINA = 'CH';
const INDIA = 'IN';
const TAILANDIA = 'TL';
const COREA_SUR = 'CS';

// se pone export antes para que en otra .js se pueda importar
export const AddCollege = ({ onSubmit, college, onChange, onCountryChange,closeDialogNewCollege, deleteCollege}) => {
    const {name, country} = college;
    const actionsNewCollege = [
        <RaisedButton
            label="Cancelar"
            onClick={closeDialogNewCollege}
        />,
        <RaisedButton
            form="addnewcollege"
            type="submit"
            label="Agregar"
            primary={true}
        />
    ];

    if(college.id) actionsNewCollege.push(
        <RaisedButton
            label="Eliminar"
            onClick={()=>deleteCollege(college.id)}
        />
    );

    return (
        <Dialog
            modal={false}
            open
            actions={actionsNewCollege}
            onRequestClose={closeDialogNewCollege}
            contentStyle={{width: '40%'}}
            title="Agregar una universidad"
        >
            <form id="addnewcollege" className="add-college-dialog" onSubmit={onSubmit}>
                <TextField
                    floatingLabelText="Nombre de la universidad"
                    name="name"
                    value={name}
                    onChange={onChange}
                    fullWidth={true}
                />
                {/*Menu que está en el formulario para agregar universidad, el value son las constantes declaradas arriba  */}
                <DropDownMenu value={country} onChange={onCountryChange} style={{width:'100%'}}>
                    <MenuItem value={USA}               primaryText='Estados Unidos de América' />
                    <MenuItem value={CANADA}            primaryText='Canadá'                    />
                    <MenuItem value={MEXICO}            primaryText='México'                    />
                    <MenuItem value={CUBA}              primaryText='Cuba'                      />
                    <MenuItem value={REP_DOM}           primaryText='República Dominicana'      />
                    <MenuItem value={COSTA_RICA}        primaryText='Costa Rica'                />
                    <MenuItem value={COLOMBIA}          primaryText='Colombia'                  />
                    <MenuItem value={ECUADOR}           primaryText='Ecuador'                   />
                    <MenuItem value={BRASIL}            primaryText='Brasil'                    />
                    <MenuItem value={BOLIVIA}           primaryText='Bolivia'                   />
                    <MenuItem value={CHILE}             primaryText='Chile'                     />
                    <MenuItem value={ARGENTINA}         primaryText='Argentina'                 />
                    <MenuItem value={URUGUAY}           primaryText='Uruguay'                   />
                    <MenuItem value={PORTUGAL}          primaryText='Polonia'                   />
                    <MenuItem value={SPAIN}             primaryText='España'                    />
                    <MenuItem value={FRANCIA}           primaryText='Francia'                   />
                    <MenuItem value={ITALIA}            primaryText='Italia'                    />
                    <MenuItem value={ALEMANIA}          primaryText='Alemania'                  />
                    <MenuItem value={REPUBLICA_CHECA}   primaryText='República Checa'           />
                    <MenuItem value={HUNGRIA}           primaryText='Hungría'                   />
                    <MenuItem value={POLONIA}           primaryText='Polonia'                   />
                    <MenuItem value={FINLANDIA}         primaryText='Finlandia'                 />
                    <MenuItem value={CHINA}             primaryText='China'                     />
                    <MenuItem value={INDIA}             primaryText='India'                     />
                    <MenuItem value={TAILANDIA}         primaryText='Tailandia'                 />
                    <MenuItem value={COREA_SUR}         primaryText='Corea del Sur'             />
                </DropDownMenu>
            </form>
        </Dialog>
    );
};