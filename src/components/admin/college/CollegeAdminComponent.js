import React from 'react';
//import {AddCollege} from "./AddCollege";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import {SearchField} from "../SearchField";
import {Link} from "react-router-dom";
import Icon from 'material-ui/svg-icons/action/info';

export const CollegeAdminComponent = ({data, search, onChange}) => {
    const dataToDisplay = data.map( (field,key) => {
        return <MyRow {...this.props} key={key} rowData={field}/>
    });
    return (
        <div>
            {/* campo de busqueda  de universidades en la administracion */}
            <SearchField
                style={{width:'50%'}}
                className="search-text"
                hintText="Busca..."
                name="search"
                onChange={onChange}
                value={search}
            />
            <Table selectable={false}>
                {/* crea la tabla que muestra a las universidades registradas */}
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow >
                        <TableHeaderColumn colSpan={3} tooltip="Lista de alumnos">
                            Lista de universidades
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        {/*Encabezado de la tabla  */}
                        <TableHeaderColumn>Universidad</TableHeaderColumn>
                        <TableHeaderColumn>País</TableHeaderColumn>
                        <TableHeaderColumn>Editar</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                {/*Cuerpo de la tabla */}
                <TableBody displayRowCheckbox={false}>
                    {dataToDisplay}
                </TableBody>
                <TableFooter adjustForCheckbox={false}>

                </TableFooter>
            </Table>
        </div>
    );
};

const MyRow = ({rowData, ...props}) => {
    return (
        <TableRow>
            {/*Pone la información en la tabla antes creada */}
            {props.children[0]}
            <TableRowColumn>{rowData.name}</TableRowColumn>
            <TableRowColumn>{rowData.country}</TableRowColumn>
            <TableRowColumn>
                {/* si presionas en el icono de ! te manda al perfil del alumno */}
                {/*<Link to='/profile'>*/}
                <Link to={`/admin/colleges/${rowData.id}`} >
                    <Icon title="Detalle"/>
                </Link>
            </TableRowColumn>
        </TableRow>
    );
};