import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import tutor from './tutorReducer';
import departments from './departmentReducer';
import academicPrograms from './academicProgramsReducer';
import profiles  from './profilesReducer';
import documents from './filesReducer';
import subjectsToCourse from './subjectsToCourseReducer';
import colleges from './collegesReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    tutor,
    departments,
    academicPrograms,
    profiles,
    documents,
    subjectsToCourse,
    colleges
});