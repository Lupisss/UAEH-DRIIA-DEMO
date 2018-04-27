import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED} from '../actions/collegesActions';

const list = (state = [], action) => {
    switch (action.type){
        case CREATE:
            return [...state, action.college];
        case READ:
            return action.colleges;
        case UPDATE:
            return state.map( college => {
                if (college.id === action.college.id ) return action.college;
                return college;
            });
        case DELETE:
            return state.filter( college => college.id !== action.idCollege );
        default:
            return state;
    }
};
// Determine if colleges have fetched from server
const areFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const collegeReducer = combineReducers({
    list,
    areFetched
});

export default collegeReducer;