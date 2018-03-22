import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import tutor from './tutorReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    tutor
});