import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TextField
} from 'material-ui';
import './AdminStylesheet.css';

export const AdminComponent = ({props}) => {
    return (
        <div>
            <div className="search">
                <TextField
                    style={{width:'50%'}}
                    className="search-text"
                    hintText="Busca..."
                    name="search"
                />
            </div>
            <Table>
                <TableHeader>
                    <TableRow >
                        <TableHeaderColumn colSpan={3} tooltip="Lista de alumnos">
                            Lista de alumnos
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn>No Cuenta</TableHeaderColumn>
                        <TableHeaderColumn>Nombre completo</TableHeaderColumn>
                        <TableHeaderColumn>Universidad destino</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>244755</TableRowColumn>
                        <TableRowColumn>Miguel Rafael Gonzalez Duron</TableRowColumn>
                        <TableRowColumn>MSSU</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>244755</TableRowColumn>
                        <TableRowColumn>Miguel Rafael Gonzalez Duron</TableRowColumn>
                        <TableRowColumn>MSSU</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>244755</TableRowColumn>
                        <TableRowColumn>Miguel Rafael Gonzalez Duron</TableRowColumn>
                        <TableRowColumn>MSSU</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>244755</TableRowColumn>
                        <TableRowColumn>Miguel Rafael Gonzalez Duron</TableRowColumn>
                        <TableRowColumn>MSSU</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>244755</TableRowColumn>
                        <TableRowColumn>Miguel Rafael Gonzalez Duron</TableRowColumn>
                        <TableRowColumn>MSSU</TableRowColumn>
                    </TableRow>
                </TableBody>
                <TableFooter>

                </TableFooter>
            </Table>
        </div>
    );
};