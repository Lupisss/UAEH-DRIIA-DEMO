import React, {Component, Fragment} from 'react';
import StudentSection from "../profile/StudentAdminPage";
import {Drawer, MenuItem} from "material-ui";
import './AdminStylesheet.css'
import {Link, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import {MainLoader} from '../../loader/Loader';
import CollegeSection from "../college/CollegeAdminPage";
import DepartmnetSection from "../department/DepartmentPage";

//La funcion principal de un contenendor es tener componentes de presentación más pequeños y contiene toda la logica
class AdminPage extends Component {
    //inicializar y debe llamar al padre
    constructor(props) {
        //Llamada al padre
        super(props);
        //opcionalmente tiene un estado que es un objeto.. clave: valor
        this.state = {};
    }

    render() {
        const {fetched} = this.props;
        console.log('Fetched',fetched);
        return (
            // Crea el menu de lado izquierdo en administrador de Estudiantes y Universidad, al seleccionar uno, te dirige a ese apartado
            <Fragment>
                {   !fetched ? <MainLoader/> :
                    <div className="Main-admin">
                        <Drawer containerClassName="drawer">
                            <MenuItem containerElement={<Link to="/admin/students"/>}>Estudiantes</MenuItem>
                            <MenuItem containerElement={<Link to="/admin/colleges"/>}>Universidades</MenuItem>
                            <MenuItem containerElement={<Link to="/admin/departments"/>}>Departamentos</MenuItem>
                        </Drawer>
                        <Switch>
                            <Route path="/admin/students" component={StudentSection}/>
                            <Route path="/admin/colleges" component={CollegeSection}/>
                            <Route path="/admin/departments" component={DepartmnetSection}/>
                        </Switch>
                    </div>
                }
            </Fragment>
        );
    }
}

// Creamos función para mapear nuestros datos del state global (redux)
// y recibirlos como props
const mapStateToProps = (state, ownProps) => ({
    fetched : state.user.isFetched
});
//Conectar con redux
AdminPage = connect(mapStateToProps,{})(AdminPage);
export default AdminPage;

