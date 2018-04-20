import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import tutor from './tutorReducer';
import departments from './departmentReducer';
import academicPrograms from './academicProgramsReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    tutor,
    departments,
    academicPrograms
});