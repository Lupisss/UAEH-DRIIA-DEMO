import {combineReducers} from 'redux';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_PROFILE, IS_FETCHED, ADD_NEW_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS} from "../actions/userActions";

const profile = ( state = {}, action) => {
    let profile;
    let addresses;
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.user;
        case LOGOUT_SUCCESS:
            return {};
        case UPDATE_PROFILE:
            return {...state, profile:action.profile};
        case ADD_NEW_ADDRESS:
            profile = {...state.profile };
            profile.addresses.push(action.address);
            return {...state, profile};
        case UPDATE_ADDRESS:
            profile = {...state.profile };
            addresses = profile.addresses.map( address => (address.id == action.address.id ) ? action.address :  address);
            profile.addresses = addresses;
            return {...state, profile };
        case DELETE_ADDRESS:
            profile = {...state.profile };
            addresses = profile.addresses.filter( address => address.id != action.idAddress );
            profile.addresses = addresses;
            return {...state, profile };
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
