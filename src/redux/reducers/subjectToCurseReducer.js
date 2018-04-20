import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED} from '../actions/subjectToCurseAction';

const list = (state = [], action) => {
    switch (action.type){
        case CREATE:
            return [...state, action.subjectToCurse];
        case READ:
            return action.subjectToCurse;
        case UPDATE:
            return state.map( subjectToCurse => {
                if (subjectToCurse.id === action.subjectToCurse.id ) return action.subjectToCurse;
                return subjectToCurse;
            });
        case DELETE:
            return state.filter( subjectToCurse => subjectToCurse.id !== action.subjectToCurse.id );
        default:
            return state;
    }
};
// Determine if subjectToCurses have fetched from server
const areFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const subjectToCurseReducer = combineReducers({
    list,
    areFetched
});

export default subjectToCurseReducer;