import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED} from '../actions/academicProgramActions';

const list = (state = [], action) => {
    switch (action.type){
        case CREATE:
            return [...state, action.academicProgram];
        case READ:
            return action.academicProgram;
        case UPDATE:
            return state.map( academicProgram => {
                if (academicProgram.id === action.academicProgram.id ) return action.academicProgram;
                return academicProgram;
            });
        case DELETE:
            return state.filter( academicProgram => academicProgram.id !== action.academicProgram.id );
        default:
            return state;
    }
};
// Determine if academicPrograms have fetched from server
const areFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const academicProgramReducer = combineReducers({
    list,
    areFetched
});

export default academicProgramReducer;