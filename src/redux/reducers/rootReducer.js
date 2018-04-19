import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import tutor from './tutorReducer';
import departments from './departmentReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    tutor,
    departments
});