import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED} from '../actions/tutorActions';

const mytutor = (state = [], action) => {
    switch (action.type){
        case CREATE:
            return [...state, action.tutor];
        case READ:
            return action.tutor;
        case UPDATE:
            return state.map( tutor => {
                if (tutor.id === action.tutor.id ) return action.tutor;
                return tutor;
            });
        case DELETE:
            return state.filter( tutor => tutor.id !== action.tutor.id );
        default:
            return state;
    }
};
// Determine if tutors have fetched from server
const isFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const tutorReducer = combineReducers({
    mytutor,
    isFetched
});

export default tutorReducer;