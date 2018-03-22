import {TutorApi} from '../../api/repos';

//FETCHED
// Determine if tutors have fetched from server
export const FETCHED = "TUTORS_FETCHED";

export const tutorsFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_TUTOR";

export const getTutorSuccess = tutor => ({
    type: READ,
    tutor
});

export const getTutor = () => (dispatch, getState) => {
    return TutorApi.getTutor()
        .then(r => {
            dispatch(getTutorSuccess(r));
            // Determine if tutors have fetched from server
            dispatch(tutorsFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_TUTOR";

export const newTutorSuccess = tutor => ({
    type: CREATE,
    tutor
});

export const newTutor = tutor => (dispatch, getState) => {
    return TutorApi.newTutor(tutor)
        .then(r => {
            dispatch(newTutorSuccess(tutor));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_TUTOR";

export const updateTutorSuccess = tutor => ({
    type: UPDATE,
    tutor
});

export const updateTutor = tutor => (dispatch, getState) => {
    return TutorApi.updateTutor(tutor)
        .then(r => {
            dispatch(updateTutorSuccess(tutor));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_TUTOR";

export const deleteTutorSuccess = idTutor => ({
    type: DELETE,
    idTutor
});

export const deleteTutor = idTutor => (dispatch, getState) => {
    return TutorApi.deleteTutor(idTutor)
        .then(r => {
            dispatch(deleteTutorSuccess(idTutor));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};


