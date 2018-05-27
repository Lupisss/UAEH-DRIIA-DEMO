import {CollegeApi} from '../../api/repos';
import {getDepartments} from "./departmentsActions";

//FETCHED
// Determine if colleges have fetched from server
export const FETCHED = "COLLEGES_FETCHED";

export const collegeFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_COLLEGE";

export const getCollegesSuccess = colleges => ({
    type: READ,
    colleges
});

export const getColleges = () => (dispatch, getState) => {
    return CollegeApi.getCollege()
        .then(r => {
            dispatch(getCollegesSuccess(r));
            // Determine if colleges have fetched from server
            dispatch(collegeFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_COLLEGE";

export const newCollegeSuccess = college => ({
    type: CREATE,
    college
});

export const newCollege = college => (dispatch, getState) => {
    return CollegeApi.newCollege(college)
        .then(r => {
            console.log(r);
            //dispatch(newCollegeSuccess(r));
            dispatch(getColleges());
            dispatch(getDepartments());
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_COLLEGE";

export const updateCollegeSuccess = college => ({
    type: UPDATE,
    college
});

export const updateCollege = college => (dispatch, getState) => {
    return CollegeApi.updateCollege(college)
        .then(r => {
            //dispatch(updateCollegeSuccess(r));
            dispatch(getColleges());
            dispatch(getDepartments());
            return Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_COLLEGE";

export const deleteCollegeSuccess = idCollege => ({
    type: DELETE,
    idCollege
});

export const deleteCollege = idCollege => (dispatch, getState) => {
    return CollegeApi.deleteCollege(idCollege)
        .then(r => {
            dispatch(deleteCollegeSuccess(idCollege));
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
        });
};