import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import tutor from './tutorReducer';
import departments from './departmentReducer';
import academicPrograms from './academicProgramsReducer';
import profiles  from './profilesReducer';
import documents from './filesReducer';
import subjectToCurse from './subjectToCurseReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    tutor,
    departments,
    academicPrograms,
    profiles,
    documents,
    subjectToCurse
});