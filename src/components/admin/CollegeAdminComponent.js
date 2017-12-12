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
            <SearchField
                style={{width:'50%'}}
                className="search-text"
                hintText="Busca..."
                name="searchCollege"
                onChange={onChange}
                value={search}
            />
            <Table>
                <TableHeader>
                    <TableRow >
                        <TableHeaderColumn colSpan={3} tooltip="Lista de alumnos">
                            Lista de universidades
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn>Id</TableHeaderColumn>
                        <TableHeaderColumn>Nombre de Universidad</TableHeaderColumn>
                        <TableHeaderColumn>País</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
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
            <TableRowColumn>{rowData.id}</TableRowColumn>
            <TableRowColumn>{rowData.name}</TableRowColumn>
            <TableRowColumn>{rowData.country}</TableRowColumn>
        </TableRow>
    );
};