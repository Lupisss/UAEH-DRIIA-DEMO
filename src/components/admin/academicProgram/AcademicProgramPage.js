import React, {Component,Fragment} from "react";
import {AcademicProgramAdminComponent} from "./AcademicProgramAdminComponent";
import {connect} from 'react-redux';
import {FloatingActionButton} from "material-ui";
import IconFab from 'material-ui/svg-icons/content/add';
import AddAcademicProgram from "./AddAcademicProgramContainer";
import {Switch,Route} from 'react-router-dom';

class AcademicProgramPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    openDialogNewAcademicProgram = () => {
        this.props.history.push("/admin/academicPrograms/new");
    };

    closeDialogNewAcademicProgram = () => {
        this.props.history.push("/admin/academicPrograms");
    };

    render() {
        const {search,academicProgram} = this.state;
        const {fetched, academicPrograms} = this.props;
        console.log(academicPrograms);
        let items = [...academicPrograms];
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.name) ||regEx.test(item.total_number_of_credits) || regEx.test(item.number_of_semesters));
        const AddAcademicProgramRender = props => (
            <AddAcademicProgram
                closeDialogNewAcademicProgram={this.closeDialogNewAcademicProgram}
                {...props}
            />
        );
        return (
            <Fragment>
                {
                    fetched &&
                    <Fragment>
                        <AcademicProgramAdminComponent
                            search={search}
                            onChange={this.handleChange}
                            data={items}
                        />
                        <FloatingActionButton
                            style={styles.fab}
                            onClick={this.openDialogNewAcademicProgram}
                        >
                            <IconFab/>
                        </FloatingActionButton>
                        <Switch>
                            <Route path="/admin/academicPrograms/:id" render={AddAcademicProgramRender}/>
                        </Switch>
                    </Fragment>
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

const mapStateToProps = (state, ownProps) => ({
    academicPrograms: state.academicPrograms.list,
    fetched : state.academicPrograms.areFetched
});

//Conectar con redux
AcademicProgramPage = connect(mapStateToProps,{})(AcademicProgramPage);
export default AcademicProgramPage;