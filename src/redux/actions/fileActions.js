import {FileApi} from '../../api/repos';

//FETCHED
// Determine if files have fetched from server
export const FETCHED = "FILES_FETCHED";

export const fileFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_FILE";

export const getFilesSuccess = file => ({
    type: READ,
    file
});

export const getFiles = () => (dispatch, getState) => {
    return FileApi.getFile()
        .then(r => {
            dispatch(getFilesSuccess(r));
            // Determine if files have fetched from server
            dispatch(fileFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_FILE";

export const newFileSuccess = file => ({
    type: CREATE,
    file
});

export const newFile = file => (dispatch, getState) => {
    return FileApi.newFile(file)
        .then(r => {
            dispatch(newFileSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_FILE";

export const updateFileSuccess = file => ({
    type: UPDATE,
    file
});

export const updateFile = file => (dispatch, getState) => {
    return FileApi.updateFile(file)
        .then(r => {
            dispatch(updateFileSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_FILE";

export const deleteFileSuccess = idFile => ({
    type: DELETE,
    idFile
});

export const deleteFile = idFile => (dispatch, getState) => {
    return FileApi.deleteFile(idFile)
        .then(r => {
            dispatch(deleteFileSuccess(idFile));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};