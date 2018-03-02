import React, {Component} from 'react';
import {StudentAdminComponent} from "./StudentAdminComponent";
import {Dialog, Drawer, FloatingActionButton, MenuItem, RaisedButton} from "material-ui";
import './AdminStylesheet.css'
import {Link, Route, Switch} from "react-router-dom";
import {api} from '../../api/API';
//import {CollegeAdminComponent} from "./CollegeAdminComponent";

/* se puede importar porque en AddCollege ya se exportó /* se pone export antes para que en otra .js se pueda importar */
import {AddCollege} from "./AddCollege";
import {CollegeAdminComponent} from "./CollegeAdminComponent";
import IconFab from 'material-ui/svg-icons/content/add'


/*Datos de algunos estudiantes /* se pone export antes para que en otra .js se pueda importar */
const fakeData = [
    {id: '244755', fullName: 'Miguel Rafael González Durón', college: 'MSSU' },
    {id: '244284', fullName: 'Guadalupe Reyes Delgadillo', college: 'Camp College' },
    {id: '345637', fullName:  'Rafael González Reyo', college: 'University of Texas At Arlington' },
    {id: '123456', fullName: 'Arnold Azael Bautista Jimenez', college: 'Some college at Germany' },
    {id: '897832', fullName: 'Some Name Some Last Name', college: 'Another College' }
];
//La funcion principal de un contenendor es tener componentes de presentación más pequeños y contiene toda la logica
class AdminPage extends Component {
    //inicializar y debe llamar al padre
    constructor(props) {
        //Llamada al padre
        super(props);
        //opcionalmente tiene un estado que es un objeto.. clave: valor
        this.state = {
            search:'',
            searchCollege:'',
            openAddCollege: false,
            college: {
                name: '',
                country: 'MX'
            },
            //Array
            collegesList:[]
        };
    }
    //METODOS
    componentWillMount(){
        api.getColleges().then( r => {
                let collegesList;
                collegesList = r;
                this.setState({collegesList});
            }).catch( e => {
                console.log(e)
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    //////////////////////////////////////////////////

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
        const {search, searchCollege, collegesList, college, openAddCollege} = this.state;
        // render student component
        const StudentComponent = () => (
            <StudentAdminComponent
                search={search}
                onChange={this.handleChange}
                data={items}
            />
        );
        // render college component
        const CollegeComponent = () => (
            <CollegeAdminComponent
                search={searchCollege}
                onChange={this.handleChange}
                data={colleges}
            />
        );
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
        let items = fakeData.slice();
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.fullName)|| regEx.test(item.id) || regEx.test(item.college));
        let colleges = collegesList.slice();
        const regExCollege = new RegExp(searchCollege,'i');
        colleges = colleges.filter(item => regExCollege.test(item.name)|| regExCollege.test(item.country) );
        return (
            // Crea el menu de lado izquierdo en administrador de Estudiantes y Universidad, al seleccionar uno, te dirige a ese apartado
            <div className="Main-admin">
                <Drawer containerClassName="drawer">
                    <MenuItem containerElement={<Link to="/admin/students" />}>Estudiantes</MenuItem>
                    <MenuItem containerElement={<Link to="/admin/colleges" />}>Universidades</MenuItem>
                </Drawer>
                <Switch>
                    <Route path="/admin/students" render={StudentComponent} />
                    <Route path="/admin/colleges" render={CollegeComponent} />
                </Switch>
                {/* Dialog for adding a new university */}
                <Dialog
                    modal={false}
                    open={openAddCollege}
                    actions={actionsNewCollege}
                    onRequestClose={this.closeDialogNewCollege}
                    contentStyle={{width:'40%'}}
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
                <FloatingActionButton style={styles.fab} onClick={this.openDialogNewCollege}>
                    <IconFab/>
                </FloatingActionButton>
                {/*End Button*/}
            </div>
        );
    }
}

const styles = {
    fab : {
        position: 'fixed',
        bottom: 15,
        right: 15
    }
}

export default AdminPage;