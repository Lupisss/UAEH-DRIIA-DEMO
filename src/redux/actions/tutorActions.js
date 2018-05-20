import {TutorApi, AddressApi} from '../../api/repos';

//FETCHED
// Determine if tutors have fetched from server
export const FETCHED = "TUTORS_FETCHED";

export const tutorFethedSuccess = status => ({
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
            dispatch(tutorFethedSuccess(true));
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
            dispatch(newTutorSuccess(r));
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
            dispatch(updateTutorSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            console.log(e);
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
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
        });
};

export const UP_ADDR_TUTOR = "UP_ADDR_TUTOR";

export const updateAddressTutorSuccess = address => ({
    type: UP_ADDR_TUTOR,
    address
});

export const updateAddressTutor = address => (dispatch, getState) => {
    return AddressApi.updateAddress(address)
        .then(r => {
            dispatch(updateAddressTutorSuccess(r));
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
        });
};

export const UP_TUTOR = "UP_TUTOR";

export const updateAddrTutorSuccess = tutor => ({
    type: UP_TUTOR,
    tutor
});

export const updateAddrTutor = (tutor,address) => (dispatch, getState) => {
    console.log(tutor);
    console.log(address);
    return AddressApi.updateAddress(address)
        .then(a => {
            return TutorApi.updateTutor(tutor)
                .then(t => {
                    t.address = a;
                    dispatch(updateAddrTutorSuccess(t));
                    return Promise.resolve(t);
                }).catch(e => {
                    console.log(e);
                    return Promise.reject(e)
                });
        }).catch(e => {
            return Promise.reject(e)
        });

};


