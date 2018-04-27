import React, {Component,Fragment} from "react";
import {connect} from 'react-redux';
import {AddCollege} from "./AddCollege";
import {newCollege,updateCollege} from "../../redux/actions/collegesActions";
import toastr from 'toastr';

class AddCollegeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            college: {
                name: '',
                country: 'MX'
            },
        };
    }

    componentWillMount(){
        const {fetched, college} = this.props;
        if (fetched){
            if (college) {
                this.setState({
                    college
                })
            }
        }
    }

    componentWillReceiveProps(nP){
        const {fetched, college} = nP;
        if (fetched){
            if (college) {
                this.setState({
                    college
                })
            }
        }
    }


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

    addNewCollege = e => {
        e.preventDefault();
        const {college} = this.state;
        console.log(college);
        if (college.id) {
            this.props.updateCollege(college)
                .then(s => {
                    toastr.success("Editado");
                    this.props.closeDialogNewCollege();
                }).catch(e => {
                    console.error(e);
                    toastr.error("Ups, ocurrio un problema");
            });
        } else {
            this.props.newCollege(college)
                .then(s => {
                    toastr.success("Guardado");
                    this.props.closeDialogNewCollege();
                }).catch(e => {
                    console.error(e);
                    toastr.error("Ups, ocurrio un problema");
            });
        }
    };

    render() {
        const {college} = this.state;
        const {fetched} = this.props;

        return (
            <Fragment>
                {
                    fetched &&
                    <Fragment>
                        <AddCollege
                            college={college}
                            onChange={this.changeCollegeField}
                            onCountryChange={this.changeCountryCollege}
                            onSubmit={this.addNewCollege}
                            closeDialogNewCollege={this.props.closeDialogNewCollege}
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
    let college;
    if (id != 'new') {
        college = (state.colleges.list.filter( college => college.id == id )[0]);
    }
    console.log('Te amo lupita reyes ',college);
    return {
        college,
        fetched: state.colleges.areFetched,
        profileId : state.user.info.profile.id
    }
};

AddCollegeContainer = connect(mapStateToProps,{newCollege,updateCollege})(AddCollegeContainer);
export default AddCollegeContainer;