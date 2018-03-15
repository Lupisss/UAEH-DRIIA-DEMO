import {combineReducers} from 'redux';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_PROFILE, IS_FETCHED} from "../actions/userActions";

const profile = ( state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.user;
        case LOGOUT_SUCCESS:
            return {};
        case UPDATE_PROFILE:
            return {...state, profile:action.profile};
        default:
            return state;

    }
};

const isFetched = (state = false, action) => {
    switch (action.type){
        case IS_FETCHED:
            return action.isFetched;
        default:
            return state;
    }
};

const userReducer = combineReducers({
    info: profile,
    isFetched: isFetched
});

export default userReducer;
