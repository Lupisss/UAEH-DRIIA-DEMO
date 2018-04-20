import {ProfileApi} from '../../api/repos';

//FETCHED
// Determine if profiles have fetched from server
export const FETCHED = "PROFILES_FETCHED";

export const profileFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_PROFILES";

export const getProfilesSuccess = profile => ({
    type: READ,
    profile
});

export const getProfiles = () => (dispatch, getState) => {
    return ProfileApi.getProfile()
        .then(r => {
            dispatch(getProfilesSuccess(r));
            // Determine if profiles have fetched from server
            dispatch(profileFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_PROFILE";

export const newProfileSuccess = profile => ({
    type: CREATE,
    profile
});

export const newProfile = profile => (dispatch, getState) => {
    return ProfileApi.newProfile(profile)
        .then(r => {
            dispatch(newProfileSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_PROFILE";

export const updateProfileSuccess = profile => ({
    type: UPDATE,
    profile
});

export const updateProfile = profile => (dispatch, getState) => {
    return ProfileApi.updateProfile(profile)
        .then(r => {
            dispatch(updateProfileSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_PROFILE";

export const deleteProfileSuccess = idProfile => ({
    type: DELETE,
    idProfile
});

export const deleteProfile = idProfile => (dispatch, getState) => {
    return ProfileApi.deleteProfile(idProfile)
        .then(r => {
            dispatch(deleteProfileSuccess(idProfile));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

