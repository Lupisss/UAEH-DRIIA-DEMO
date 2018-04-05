import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {PuProfileComponent} from "./PuProfileComponent";
import {MainLoader} from '../loader/Loader';


class PuProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {fetched, profile} = this.props;
        return (

                    !fetched ? <MainLoader/> :

                                <Fragment>
                                    <PuProfileComponent
                                        profile={profile}
                                    />
                                </Fragment>

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