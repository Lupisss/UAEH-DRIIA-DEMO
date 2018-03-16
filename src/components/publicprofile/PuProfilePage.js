import React, {Component} from "react";
import {connect} from 'react-redux';
import {PuProfileComponent} from "./PuProfileComponent";
import {MainLoader} from '../loader/Loader';


class PuProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {fetched} = this.props;
        return (

                    !fetched ? <MainLoader/> :

                                <div>

                                    <PuProfileComponent/>
                                </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user.info,
    profile: state.user.info.profile,
    fetched: state.user.isFetched
});

PuProfilePage = connect(mapStateToProps)(PuProfilePage);
export default PuProfilePage;