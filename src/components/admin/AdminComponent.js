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
import Icon from 'material-ui/svg-icons/action/info';
import {Link} from 'react-router-dom';

export const AdminComponent = ({data, search, onChange}) => {
    const dataToDisplay = data.map( (field,key) => {
       return <MyRow key={key} rowData={field}/>
    });
    return (
        <div>
            <div className="search">
                <TextField
                    style={{width:'50%'}}
                    className="search-text"
                    hintText="Busca..."
                    name="search"
                    onChange={onChange}
                    value={search}
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
            <TableRowColumn>{rowData.fullName}</TableRowColumn>
            <TableRowColumn>{rowData.college}</TableRowColumn>
            <TableRowColumn>
                <Link to='/profile'>
                    <Icon title="Detalle"/>
                </Link>
            </TableRowColumn>
        </TableRow>
    );
};