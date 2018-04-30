import React, {Component,Fragment} from "react";
import {connect} from 'react-redux';
import {AddAcademicProgram} from "./AddAcademicProgram";
import {newAcademicProgram,updateAcademicProgram,deleteAcademicProgram} from "../../../redux/actions/academicProgramActions";
import toastr from 'toastr';

class AddAcademicProgramContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            academicProgram: {
                name: '',
                number_of_semesters: 0,
                total_number_of_credits: 0,
                college: '',
                department: ''
            }
        };
    }

    componentWillMount(){
        const {fetched, academicProgram} = this.props;
        if (fetched){
            if (academicProgram) {
                let academicP = JSON.parse(JSON.stringify(academicProgram));
                academicP.department = academicP.department.id;
                academicP.college = academicProgram.department.college;
                this.setState({
                    academicProgram: academicP
                })
            }
        }
    }

    componentWillReceiveProps(nP){
        const {fetched, academicProgram} = nP;
        if (fetched){
            if (academicProgram) {
                let academicP = JSON.parse(JSON.stringify(academicProgram));
                academicP.department = academicP.department.id;
                academicP.college = academicProgram.department.college;
                this.setState({
                    academicProgram: academicP
                })
            }
        }
    }


    changeAcademicProgramField = (e) => {
        let {academicProgram} = this.state;
        academicProgram[e.target.name] = e.target.value;
        this.setState({academicProgram});
    };

    changeDepartmentAcademicProgram = name => (event, index, value) => {
        let {academicProgram} = this.state;
        academicProgram[name] = value;
        this.setState({academicProgram});
    };

    addNewAcademicProgram = e => {
        e.preventDefault();
        const {academicProgram} = this.state;
        console.log(academicProgram);
        if (academicProgram.id) {
            this.props.updateAcademicProgram(academicProgram)
                .then(s => {
                    toastr.success("Editado");
                    this.props.closeDialogNewAcademicProgram();
                }).catch(e => {
                console.error(e);
                toastr.error("Ups, ocurrio un problema");
            });
        } else {
            this.props.newAcademicProgram(academicProgram)
                .then(s => {
                    toastr.success("Guardado");
                    this.props.closeDialogNewAcademicProgram();
                }).catch(e => {
                console.error(e);
                toastr.error("Ups, ocurrio un problema");
            });
        }
    };

    deleteAcademicProgram = id => {
        this.props.deleteAcademicProgram(id)
            .then(s => {
                toastr.warning("Eliminado");
                this.props.closeDialogNewAcademicProgram();
            }).catch(e => {
            console.error(e);
            toastr.error("Ups, ocurrio un problema");
        });
    };

    render() {
        const {academicProgram} = this.state;
        const {fetched, colleges, departments} = this.props;
        const copyDepartments = departments.filter( department =>
            academicProgram.college == department.college.id
        );
        const copyColleges = colleges.filter( college =>
            college.departments.length > 0
        );
        return (
            <Fragment>
                {
                    fetched &&
                    <Fragment>
                        <AddAcademicProgram
                            academicProgram={academicProgram}
                            colleges={copyColleges}
                            departments={copyDepartments}
                            onChange={this.changeAcademicProgramField}
                            onDepartmentChange={this.changeDepartmentAcademicProgram}
                            onSubmit={this.addNewAcademicProgram}
                            closeDialogNewAcademicProgram={this.props.closeDialogNewAcademicProgram}
                            deleteAcademicProgram={this.deleteAcademicProgram}
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
    let academicProgram;
    if (id != 'new') {
        academicProgram = (state.academicPrograms.list.filter( academicProgram => academicProgram.id == id )[0]);
    }
    console.log('Te amo lupita reyes ',academicProgram);
    return {
        academicProgram,
        colleges: state.colleges.list,
        departments: state.departments.list,
        fetched: state.academicPrograms.areFetched,
        profileId : state.user.info.profile.id
    }
};

AddAcademicProgramContainer = connect(mapStateToProps,{newAcademicProgram,updateAcademicProgram,deleteAcademicProgram})(AddAcademicProgramContainer);
export default AddAcademicProgramContainer;