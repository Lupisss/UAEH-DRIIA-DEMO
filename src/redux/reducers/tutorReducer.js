import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED, UP_ADDR_TUTOR, UP_TUTOR} from '../actions/tutorActions';

const mytutor = (state = [], action) => {
    let address;
    let tutor;
    switch (action.type){
        case CREATE:
            return [...state, action.tutor];
        case READ:
            return action.tutor;
        case UPDATE:
        case UP_TUTOR:
            return state.map( tutor => {
                if (tutor.id === action.tutor.id ) return action.tutor;
                return tutor;
            });
        case DELETE:
            return state.filter( tutor => tutor.id !== action.tutor.id );
        case UP_ADDR_TUTOR:
            tutor = [...state];
            tutor[0].address = action.address;
            return tutor;
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