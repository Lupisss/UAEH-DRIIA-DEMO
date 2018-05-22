import {combineReducers} from 'redux';
import {CREATE, READ, UPDATE, DELETE, FETCHED, ADD_HOMOLOGACION} from '../actions/subjectsToCourseActions';

const list = (state = [], action) => {
    let subjectToCourse;
    let subjectsToCourse;
    switch (action.type){
        case CREATE:
            return [...state, action.subjectToCourse];
        case READ:
            return action.subjectToCourse;
        case UPDATE:
            return state.map( subjectToCourse => {
                if (subjectToCourse.id === action.subjectToCourse.id ) return action.subjectToCourse;
                return subjectToCourse;
            });
        case DELETE:
            return state.filter( subjectToCourse => subjectToCourse.id !== action.subjectToCourse.id );
        case ADD_HOMOLOGACION:
            subjectsToCourse = JSON.parse(JSON.stringify(state));
            subjectToCourse = subjectsToCourse.filter( subjectToCourse => subjectToCourse.id !== action.subjectToCourseId );
            subjectToCourse.homologaciones.push(action.homologacion);
            let subjects = subjectsToCourse.map( subject => {
                if (subjectToCourse.id == action.subjectToCourseId) {
                    return subjectToCourse
                }
                return subject;
            });
            return subjects;
        default:
            return state;
    }
};
// Determine if subjectToCourses have fetched from server
const areFetched = (state = false, action) => {
    switch (action.type){
        case FETCHED:
            return action.status;
        default:
            return state;
    }
};

const subjectsToCourseReducer = combineReducers({
    list,
    areFetched
});

export default subjectsToCourseReducer;