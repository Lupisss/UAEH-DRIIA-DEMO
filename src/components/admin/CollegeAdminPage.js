import React, {Component,Fragment} from "react";
import {CollegeAdminComponent} from "./CollegeAdminComponent";
import {connect} from 'react-redux';
import {FloatingActionButton} from "material-ui";
import IconFab from 'material-ui/svg-icons/content/add';
import AddCollege from "./AddCollegeContainer";
import {Switch,Route} from 'react-router-dom';

class CollegeAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    openDialogNewCollege = () => {
        this.props.history.push("/admin/colleges/new");
    };

    closeDialogNewCollege = () => {
        this.props.history.push("/admin/colleges");
    };

    render() {
        const {search,college} = this.state;
        const {fetched, colleges} = this.props;
        console.log(colleges);
        let items = [...colleges];
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.name));
        const AddCollegeRender = props => (
            <AddCollege
                closeDialogNewCollege={this.closeDialogNewCollege}
                {...props}
            />
        );
        return (
            <Fragment>
                {
                    fetched &&
                    <Fragment>
                        <CollegeAdminComponent
                            search={search}
                            onChange={this.handleChange}
                            data={items}
                        />
                        <FloatingActionButton
                            style={styles.fab}
                            onClick={this.openDialogNewCollege}
                        >
                            <IconFab/>
                        </FloatingActionButton>
                        <Switch>
                            <Route path="/admin/colleges/:id" render={AddCollegeRender}/>
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
    colleges: state.colleges.list,
    fetched : state.colleges.areFetched
});

//Conectar con redux
CollegeAdminPage = connect(mapStateToProps,{})(CollegeAdminPage);
export default CollegeAdminPage;