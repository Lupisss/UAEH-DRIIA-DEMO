import React, {Component} from 'react';
import {StudentAdminComponent} from "./StudentAdminComponent";
import {Drawer, MenuItem, TextField} from "material-ui";
import './AdminStylesheet.css'
import {Link, Route, Switch} from "react-router-dom";
import {api} from '../../api/API';
//import {CollegeAdminComponent} from "./CollegeAdminComponent";
import {AddCollege} from "./AddCollege";

const fakeData = [
    {id: '244755', fullName: 'Miguel Rafael González Durón', college: 'MSSU' },
    {id: '244284', fullName: 'Guadalupe Reyes Delgadillo', college: 'Camp College' },
    {id: '345637', fullName:  'Rafael González Reyo', college: 'University of Texas At Arlington' },
    {id: '123456', fullName: 'Arnold Azael Bautista Jimenez', college: 'Some college at Germany' },
    {id: '897832', fullName: 'Some Name Some Last Name', college: 'Another College' }
];

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:'',
            college: {
                name: '',
                country: 'MX'
            }
        };
    }

    componentWillMount(){
        api.getColleges().then( r => {
                console.log(r);
            }).catch( e => {
                console.log(e)
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    //////////////////////////////////////////////////

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
        api.newCollege(college)
    };

    render() {
        const {search, college} = this.state;
        const StudentComponent = () => (
            <StudentAdminComponent
                search={search}
                onChange={this.handleChange}
                data={items}
            />
        );
        const CollegeComponent = () => (
            <AddCollege
                college={college}
                onChange={this.changeCollegeField}
                onCountryChange={this.changeCountryCollege}
                onSubmit={this.addNewCollege}
            />
        );
        let items = fakeData.slice();
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.fullName)|| regEx.test(item.id) || regEx.test(item.college));
        return (
            <div className="Main-admin">
                <Drawer containerClassName="drawer">
                    <MenuItem containerElement={<Link to="/admin/students" />}>Estudiantes</MenuItem>
                    <MenuItem containerElement={<Link to="/admin/colleges" />}>Universidades</MenuItem>
                </Drawer>
                <Switch>
                    <Route path="/admin/students" render={StudentComponent} />
                    <Route path="/admin/colleges" render={CollegeComponent} />
                </Switch>
            </div>
        );
    }
}


export default AdminPage;