import {combineReducers} from 'redux';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../actions/userActions";

const profile = ( state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.user;
        case LOGOUT_SUCCESS:
            return {};
        default:
            return state;

    }
};

const userReducer = combineReducers({
    info: profile
});

export default userReducer;
