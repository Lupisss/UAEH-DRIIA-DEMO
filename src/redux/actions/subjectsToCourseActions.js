import {SubjectToCourseApi} from "../../api/repos";


//FETCHED
// Determine if subjectToCourses have fetched from server
export const FETCHED = "SUBJECTSTOCOURSE_FETCHED";

export const subjectToCourseFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_SUBJECTTOCOURSE";

export const getSubjectsToCourseSuccess = subjectToCourse => ({
    type: READ,
    subjectToCourse
});

export const getSubjectsToCourse = () => (dispatch, getState) => {
    return SubjectToCourseApi.getSubjectToCourse()
        .then(r => {
            dispatch(getSubjectsToCourseSuccess(r));
            // Determine if subjectToCourses have fetched from server
            dispatch(subjectToCourseFethedSuccess(true));
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_SUBJECTTOCOURSE";

export const newSubjectToCourseSuccess = subjectToCourse => ({
    type: CREATE,
    subjectToCourse
});

export const newSubjectToCourse = subjectToCourse => (dispatch, getState) => {
    return SubjectToCourseApi.newSubjectToCourse(subjectToCourse)
        .then(r => {
            dispatch(newSubjectToCourseSuccess(r));
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_SUBJECTTOCOURSE";

export const updateSubjectToCourseSuccess = subjectToCourse => ({
    type: UPDATE,
    subjectToCourse
});

export const updateSubjectToCourse = subjectToCourse => (dispatch, getState) => {
    return SubjectToCourseApi.updateSubjectToCourse(subjectToCourse)
        .then(r => {
            dispatch(updateSubjectToCourseSuccess(r));
            return Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            return Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_SUBJECTTOCOURSE";

export const deleteSubjectToCourseSuccess = idSubjectToCourse => ({
    type: DELETE,
    idSubjectToCourse
});

export const deleteSubjectToCourse = idSubjectToCourse => (dispatch, getState) => {
    return SubjectToCourseApi.deleteSubjectToCourse(idSubjectToCourse)
        .then(r => {
            dispatch(deleteSubjectToCourseSuccess(idSubjectToCourse));
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
        });
};


