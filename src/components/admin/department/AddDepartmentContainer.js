import React, {Component,Fragment} from "react";
import {connect} from 'react-redux';
import {AddDepartment} from "./AddDepartment";
import {newDepartment,updateDepartment,deleteDepartment} from "../../../redux/actions/departmentsActions";
import toastr from 'toastr';

class AddDepartmentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: {
                name: '',
                abbreviation: '',
                college: ''
            }
        };
    }

    componentWillMount(){
        const {fetched, department} = this.props;
        if (fetched){
            if (department) {
                let depa = {...department};
                depa.college = depa.college.id;
                this.setState({
                    department: depa
                })
            }
        }
    }

    componentWillReceiveProps(nP){
        const {fetched, department} = nP;
        if (fetched){
            if (department) {
                let depa = {...department};
                depa.college = depa.college.id;
                this.setState({
                    department: depa
                })
            }
        }
    }


    changeDepartmentField = (e) => {
        let {department} = this.state;
        department[e.target.name] = e.target.value;
        this.setState({department});
    };

    changeCollegeDepartment = (event, index, value) => {
        let {department} = this.state;
        department['college'] = value;
        this.setState({department});
    };

    addNewDepartment = e => {
        e.preventDefault();
        const {department} = this.state;
        console.log(department);
        if (department.id) {
            this.props.updateDepartment(department)
                .then(s => {
                    toastr.success("Editado");
                    this.props.closeDialogNewDepartment();
                }).catch(e => {
                console.error(e);
                toastr.error("Ups, ocurrio un problema");
            });
        } else {
            this.props.newDepartment(department)
                .then(s => {
                    toastr.success("Guardado");
                    this.props.closeDialogNewDepartment();
                }).catch(e => {
                console.error(e);
                toastr.error("Ups, ocurrio un problema");
            });
        }
    };

    deleteDepartment = id => {
        this.props.deleteDepartment(id)
            .then(s => {
                toastr.warning("Eliminado");
                this.props.closeDialogNewDepartment();
            }).catch(e => {
            console.error(e);
            toastr.error("Ups, ocurrio un problema");
        });
    };

    render() {
        const {department} = this.state;
        const {fetched, colleges} = this.props;

        return (
            <Fragment>
                {
                    fetched &&
                    <Fragment>
                        <AddDepartment
                            department={department}
                            colleges={colleges}
                            onChange={this.changeDepartmentField}
                            onCollegeChange={this.changeCollegeDepartment}
                            onSubmit={this.addNewDepartment}
                            closeDialogNewDepartment={this.props.closeDialogNewDepartment}
                            deleteDepartment={this.deleteDepartment}
                        />
                    </Fragment>
                }
            </Fragment>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id);
    let department;
    if (id != 'new') {
        department = (state.departments.list.filter( department => department.id == id )[0]);
    }
    console.log('Te amo lupita reyes ',department);
    return {
        department,
        colleges: state.colleges.list,
        fetched: state.departments.areFetched,
        profileId : state.user.info.profile.id
    }
};

AddDepartmentContainer = connect(mapStateToProps,{newDepartment,updateDepartment,deleteDepartment})(AddDepartmentContainer);
export default AddDepartmentContainer;