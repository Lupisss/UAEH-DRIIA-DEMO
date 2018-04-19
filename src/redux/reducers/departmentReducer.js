import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED} from '../actions/departmentActions';

const list = (state = [], action) => {
    switch (action.type){
        case CREATE:
            return [...state, action.department];
        case READ:
            return action.department;
        case UPDATE:
            return state.map( department => {
                if (department.id === action.department.id ) return action.department;
                return department;
            });
        case DELETE:
            return state.filter( department => department.id !== action.department.id );
        default:
            return state;
    }
};
// Determine if departments have fetched from server
const areFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const departmentReducer = combineReducers({
    list,
    areFetched
});

export default departmentReducer;