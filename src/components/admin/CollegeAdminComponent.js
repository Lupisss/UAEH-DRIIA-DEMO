import React from 'react';
//import {AddCollege} from "./AddCollege";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import {SearchField} from "./SearchField";

export const CollegeAdminComponent = ({data, search, onChange}) => {
    const dataToDisplay = data.map( (field,key) => {
        return <MyRow key={key} rowData={field}/>
    });
    return (
        <div>
            {/* campo de busqueda  de universidades en la administracion */}
            <SearchField
                style={{width:'50%'}}
                className="search-text"
                hintText="Busca..."
                name="searchCollege"
                onChange={onChange}
                value={search}
            />
            <Table>
                {/* crea la tabla que muestra a las universidades registradas */}
                <TableHeader>
                    <TableRow >
                        <TableHeaderColumn colSpan={3} tooltip="Lista de alumnos">
                            Lista de universidades
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        {/*Encabezado de la tabla  */}
                        <TableHeaderColumn>Id</TableHeaderColumn>
                        <TableHeaderColumn>Nombre de Universidad</TableHeaderColumn>
                        <TableHeaderColumn>País</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                {/*Cuerpo de la tabla */}
                <TableBody>
                    {dataToDisplay}
                </TableBody>
                <TableFooter>

                </TableFooter>
            </Table>
        </div>
    );
};

const MyRow = ({rowData}) => {
    return (

        <TableRow>
            {/*Pone la información en la tabla antes creada */}
            <TableRowColumn>{rowData.id}</TableRowColumn>
            <TableRowColumn>{rowData.name}</TableRowColumn>
            <TableRowColumn>{rowData.country}</TableRowColumn>
        </TableRow>
    );
};