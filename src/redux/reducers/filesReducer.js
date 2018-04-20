import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED} from '../actions/fileActions';

const list = (state = [], action) => {
    switch (action.type){
        case CREATE:
            return [...state, action.file];
        case READ:
            return action.file;
        case UPDATE:
            return state.map( file => {
                if (file.id === action.file.id ) return action.file;
                return file;
            });
        case DELETE:
            return state.filter( file => file.id !== action.file.id );
        default:
            return state;
    }
};
// Determine if files have fetched from server
const areFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const fileReducer = combineReducers({
    list,
    areFetched
});

export default fileReducer;