import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED} from '../actions/profilesActions';

const list = (state = [], action) => {
    switch (action.type){
        case CREATE:
            return [...state, action.profile];
        case READ:
            return action.profile;
        case UPDATE:
            return state.map( profile => {
                if (profile.id === action.profile.id ) return action.profile;
                return profile;
            });
        case DELETE:
            return state.filter( profile => profile.id !== action.profile.id );
        default:
            return state;
    }
};
// Determine if profiles have fetched from server
const areFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const profileReducer = combineReducers({
    list,
    areFetched
});

export default profileReducer;