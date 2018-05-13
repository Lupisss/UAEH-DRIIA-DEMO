import React, {Component, Fragment} from "react";
// Para conectar con redux
import {connect} from 'react-redux';
import {StudentAdminComponent} from "./StudentAdminComponent";

class StudentAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    render() {
        const {search} = this.state;
        const {profiles, fetched} = this.props;
        console.log(profiles);
        let items = [...profiles];
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.surname)|| regEx.test(item.academicId) || regEx.test(item.given_name) || regEx.test(item.user.email));
        return (
            <Fragment>
                {
                    fetched &&
                    <StudentAdminComponent
                        search={search}
                        onChange={this.handleChange}
                        data={items}
                    />
                }
            </Fragment>
        );
    }
}

// Creamos función para mapear nuestros datos del state global (redux)
// y recibirlos como props
const mapStateToProps = (state, ownProps) => ({
    profiles : state.profiles.list,
    fetched : state.profiles.areFetched
});
//Conectar con redux
StudentAdminPage = connect(mapStateToProps,{})(StudentAdminPage);
export default StudentAdminPage;