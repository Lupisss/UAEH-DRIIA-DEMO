import {SubjectToCurseApi} from "../../api/repos";


//FETCHED
// Determine if subjectToCurses have fetched from server
export const FETCHED = "SUBJECTSTOCURSE_FETCHED";

export const subjectToCurseFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_SUBJECTTOCURSE";

export const getSubjectsToCurseSuccess = subjectToCurse => ({
    type: READ,
    subjectToCurse
});

export const getSubjectsToCurse = () => (dispatch, getState) => {
    return SubjectToCurseApi.getSubjectToCurse()
        .then(r => {
            dispatch(getSubjectsToCurseSuccess(r));
            // Determine if subjectToCurses have fetched from server
            dispatch(subjectToCurseFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_SUBJECTTOCURSE";

export const newSubjectToCurseSuccess = subjectToCurse => ({
    type: CREATE,
    subjectToCurse
});

export const newSubjectToCurse = subjectToCurse => (dispatch, getState) => {
    return SubjectToCurseApi.newSubjectToCurse(subjectToCurse)
        .then(r => {
            dispatch(newSubjectToCurseSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_SUBJECTTOCURSE";

export const updateSubjectToCurseSuccess = subjectToCurse => ({
    type: UPDATE,
    subjectToCurse
});

export const updateSubjectToCurse = subjectToCurse => (dispatch, getState) => {
    return SubjectToCurseApi.updateSubjectToCurse(subjectToCurse)
        .then(r => {
            dispatch(updateSubjectToCurseSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_SUBJECTTOCURSE";

export const deleteSubjectToCurseSuccess = idSubjectToCurse => ({
    type: DELETE,
    idSubjectToCurse
});

export const deleteSubjectToCurse = idSubjectToCurse => (dispatch, getState) => {
    return SubjectToCurseApi.deleteSubjectToCurse(idSubjectToCurse)
        .then(r => {
            dispatch(deleteSubjectToCurseSuccess(idSubjectToCurse));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};


