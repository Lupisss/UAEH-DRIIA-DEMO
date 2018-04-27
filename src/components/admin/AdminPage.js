import React, {Component, Fragment} from 'react';
import StudentSection from "./StudentAdminPage";
import {Dialog, Drawer, FloatingActionButton, MenuItem, RaisedButton} from "material-ui";
import './AdminStylesheet.css'
import {Link, Route, Switch} from "react-router-dom";
import {api} from '../../api/API';
import {connect} from 'react-redux';

import {MainLoader} from '../loader/Loader';
//import {CollegeAdminComponent} from "./CollegeAdminComponent";

/* se puede importar porque en AddCollege ya se exportó /* se pone export antes para que en otra .js se pueda importar */
import {AddCollege} from "./AddCollege";
import CollegeSection from "./CollegeAdminPage";
import IconFab from 'material-ui/svg-icons/content/add';



//La funcion principal de un contenendor es tener componentes de presentación más pequeños y contiene toda la logica
class AdminPage extends Component {
    //inicializar y debe llamar al padre
    constructor(props) {
        //Llamada al padre
        super(props);
        //opcionalmente tiene un estado que es un objeto.. clave: valor
        this.state = {
            openAddCollege: false,
            college: {
                name: '',
                country: 'MX'
            }
        };
    }

    //////////////////////////////////////////////////
    handleChange = e => this.setState({[e.target.name]:e.target.value});
    // Controls For adding A new College

    changeCollegeField = (e) => {
        let {college} = this.state;
        college[e.target.name] = e.target.value;
        this.setState({college});
    };

    changeCountryCollege = (event, index, value) => {
        let {college} = this.state;
        college['country'] = value;
        this.setState({college});
    };

    addNewCollege = (e) => {
        e.preventDefault();
        const {college} = this.state;
        console.log(college);
        api.newCollege(college).then( s => {
            let {collegesList} = this.state;
            collegesList.push(s);
            this.setState({collegesList})
        }).catch( e => {
            console.error(e);
        })
    };

    openDialogNewCollege = () => {
        this.setState({openAddCollege:true});
    };

    closeDialogNewCollege = () => {
        this.setState({openAddCollege:false});
    };

    //////////////////////////////////////////////////

    render() {
        const { college, openAddCollege} = this.state;
        const {fetched} = this.props;
        console.log('Fetched',fetched);
        // render college component
        // const CollegeComponent = () => (

        // );
        //Botones que están en agregar universidad, cancelar y aceptar
        const actionsNewCollege = [
            <RaisedButton
                label="Cancelar"
                onClick={this.closeDialogNewCollege}
            />,
            <RaisedButton
                form="addnewcollege"
                type="submit"
                label="Agregar"
                primary={true}
                onClick={this.closeDialogNewCollege}
            />

        ];

        return (
            // Crea el menu de lado izquierdo en administrador de Estudiantes y Universidad, al seleccionar uno, te dirige a ese apartado
            <Fragment>
                {   !fetched ? <MainLoader/> :
                    <div className="Main-admin">
                        <Drawer containerClassName="drawer">
                            <MenuItem containerElement={<Link to="/admin/students"/>}>Estudiantes</MenuItem>
                            <MenuItem containerElement={<Link to="/admin/colleges"/>}>Universidades</MenuItem>
                        </Drawer>
                        <Switch>
                            <Route path="/admin/students" component={StudentSection}/>
                            <Route path="/admin/colleges" component={CollegeSection}/>
                        </Switch>
                        {/* Dialog for adding a new university */}
                        <Dialog
                            modal={false}
                            open={openAddCollege}
                            actions={actionsNewCollege}
                            onRequestClose={this.closeDialogNewCollege}
                            contentStyle={{width: '40%'}}
                            title="Agregar una universidad"
                        >
                            <AddCollege
                                className="add-college-dialog"
                                college={college}
                                onChange={this.changeCollegeField}
                                onCountryChange={this.changeCountryCollege}
                                onSubmit={this.addNewCollege}
                            />
                        </Dialog>
                        {/* End Of Dialog*/}
                        {/* Button for opening New College*/}
                        {/*<FloatingActionButton style={styles.fab} onClick={this.openDialogNewCollege}>*/}
                            {/*<IconFab/>*/}
                        {/*</FloatingActionButton>*/}
                        {/*End Button*/}
                    </div>
                }
            </Fragment>
        );
    }
}

const styles = {
    fab : {
        position: 'fixed',
        bottom: 15,
        right: 15
    }
};

// Creamos función para mapear nuestros datos del state global (redux)
// y recibirlos como props
const mapStateToProps = (state, ownProps) => ({
    fetched : state.user.isFetched
});
//Conectar con redux
AdminPage = connect(mapStateToProps,{})(AdminPage);
export default AdminPage;

