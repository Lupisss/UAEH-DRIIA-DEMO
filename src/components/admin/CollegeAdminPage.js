import React, {Component,Fragment} from "react";
import {CollegeAdminComponent} from "./CollegeAdminComponent";
import {connect} from 'react-redux';

class CollegeAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    render() {
        const {search} = this.state;
        const {fetched, colleges} = this.props;
        console.log(colleges);
        let items = [...colleges];
        const regEx = new RegExp(search,'i');
        items = items.filter(item => regEx.test(item.name));
        return (
            <Fragment>
                {
                    fetched &&
                    <CollegeAdminComponent
                        search={search}
                        onChange={this.handleChange}
                        data={items}
                    />
                }
            </Fragment>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    colleges: state.colleges.list,
    fetched : state.colleges.areFetched
});

//Conectar con redux
CollegeAdminPage = connect(mapStateToProps,{})(CollegeAdminPage);
export default CollegeAdminPage;