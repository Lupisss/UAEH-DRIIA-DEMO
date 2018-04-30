import React, {Component,Fragment} from "react";
import {DepartmentAdminComponent} from "./DepartmentAdminComponent";
import {connect} from 'react-redux';
import {FloatingActionButton} from "material-ui";
import IconFab from 'material-ui/svg-icons/content/add';
import AddDepartment from "./AddDepartmentContainer";
import {Switch,Route} from 'react-router-dom';

class DepartmentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    openDialogNewDepartment = () => {
        this.props.history.push("/admin/departments/new");
    };

    closeDialogNewDepartment = () => {
        this.props.history.push("/admin/departments");
    };

    render() {
        const {search,department} = this.state;
        const {fetched, departments} = this.props;
        console.log(departments);
        let items = [...departments];
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.name) ||regEx.test(item.college.name) || regEx.test(item.abbreviation));
        const AddDepartmentRender = props => (
            <AddDepartment
                closeDialogNewDepartment={this.closeDialogNewDepartment}
                {...props}
            />
        );
        return (
            <Fragment>
                {
                    fetched &&
                    <Fragment>
                        <DepartmentAdminComponent
                            search={search}
                            onChange={this.handleChange}
                            data={items}
                        />
                        <FloatingActionButton
                            style={styles.fab}
                            onClick={this.openDialogNewDepartment}
                        >
                            <IconFab/>
                        </FloatingActionButton>
                        <Switch>
                            <Route path="/admin/departments/:id" render={AddDepartmentRender}/>
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
    departments: state.departments.list,
    fetched : state.departments.areFetched
});

//Conectar con redux
DepartmentPage = connect(mapStateToProps,{})(DepartmentPage);
export default DepartmentPage;