import {DepartmentApi} from '../../api/repos';

//FETCHED
// Determine if departments have fetched from server
export const FETCHED = "DEPARTMENTS_FETCHED";

export const departmentFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_DEPARTMENT";

export const getDepartmentsSuccess = department => ({
    type: READ,
    department
});

export const getDepartments = () => (dispatch, getState) => {
    return DepartmentApi.getDepartment()
        .then(r => {
            dispatch(getDepartmentsSuccess(r));
            // Determine if departments have fetched from server
            dispatch(departmentFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_DEPARTMENT";

export const newDepartmentSuccess = department => ({
    type: CREATE,
    department
});

export const newDepartment = department => (dispatch, getState) => {
    return DepartmentApi.newDepartment(department)
        .then(r => {
            dispatch(newDepartmentSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_DEPARTMENT";

export const updateDepartmentSuccess = department => ({
    type: UPDATE,
    department
});

export const updateDepartment = department => (dispatch, getState) => {
    return DepartmentApi.updateDepartment(department)
        .then(r => {
            dispatch(updateDepartmentSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_DEPARTMENT";

export const deleteDepartmentSuccess = idDepartment => ({
    type: DELETE,
    idDepartment
});

export const deleteDepartment = idDepartment => (dispatch, getState) => {
    return DepartmentApi.deleteDepartment(idDepartment)
        .then(r => {
            dispatch(deleteDepartmentSuccess(idDepartment));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};


