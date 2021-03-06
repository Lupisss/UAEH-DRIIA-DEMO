import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui';
import '../main/AdminStylesheet.css';
import Icon from 'material-ui/svg-icons/action/info';
import {Link} from 'react-router-dom';
import {SearchField} from "../SearchField";

export const StudentAdminComponent = ({data, search, onChange}) => {
    const filtered = data.filter( field => !field.user.is_staff) ;
    const dataToDisplay = filtered.map( (field,key) => {
       return <MyRow {...this.props} key={key} rowData={field}/>
    });
    return (
        <div >
            {/* campo de busqueda en la administracion */}
            <SearchField
                style={{width:'50%'}}
                className="search-text"
                hintText="Busca..."
                name="search"
                onChange={onChange}
                value={search}
            />
            {/* crea la tabla que muestra a los alumnos registrados */}
            <Table selectable={false}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow >
                        <TableHeaderColumn colSpan={5} tooltip="Lista de alumnos">
                            Lista de alumnos
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        {/*Crea las columnas de la tabla */}
                        <TableHeaderColumn>No. Cuenta</TableHeaderColumn>
                        <TableHeaderColumn>Apellido(s)</TableHeaderColumn>
                        <TableHeaderColumn>Nombre(s)</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                        <TableHeaderColumn>Detalle</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                {/* crea el cuerpo de la tabla */}
                <TableBody displayRowCheckbox={false}>
                    {dataToDisplay}
                </TableBody>
                {/*Pies de la tabla */}
                <TableFooter adjustForCheckbox={false}>

                </TableFooter>
            </Table>
        </div>
    );
};

const MyRow = ({rowData, ...props}) => {
    return (
        <TableRow {...props}>
            {props.children[0]}
            {/* pone los valores de la tabla, cuenta, nombre y escuela */}
            <TableRowColumn>{rowData.academicId = "" || !rowData.academicId? "No asignado" : rowData.academicId }</TableRowColumn>
            <TableRowColumn>{rowData.surname}</TableRowColumn>
            <TableRowColumn>{rowData.given_name}</TableRowColumn>
            <TableRowColumn>{rowData.user.email}</TableRowColumn>
            <TableRowColumn>

                {/* si presionas en el icono de ! te manda al perfil del alumno */}
                {/*<Link to='/profile'>*/}
                    <Link to={`/public/${rowData.id}`}>

                    <Icon title="Detalle"/>
                </Link>
            </TableRowColumn>
        </TableRow>
    );
};