import {DepartmentApi} from '../../api/repos';
import {getColleges} from "./collegesActions";

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
            // let department = {...r};
            // department.college = getState().colleges.list.filter( college =>
            //     college.id == r.college
            // )[0];
            // console.log(department);
            // dispatch(newDepartmentSuccess(department));
            dispatch(getDepartments());
            dispatch(getColleges());
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
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
            // let department = {...r};
            // department.college = getState().colleges.list.filter( college =>
            //     college.id == r.college
            // )[0];
            // dispatch(updateDepartmentSuccess(department));
            dispatch(getDepartments());
            dispatch(getColleges());
            return Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            return Promise.reject(e)
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
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
        });
};


