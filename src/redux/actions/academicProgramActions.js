import {AcademicProgramApi} from '../../api/repos';

//FETCHED
// Determine if academicPrograms have fetched from server
export const FETCHED = "ACADEMIC_PROGRAMS_FETCHED";

export const academicProgramFethedSuccess = status => ({
    type: FETCHED,
    status
});

// READ
export const READ = "GET_ACADEMIC_PROGRAM";

export const getAcademicProgramsSuccess = academicProgram => ({
    type: READ,
    academicProgram
});

export const getAcademicPrograms = () => (dispatch, getState) => {
    return AcademicProgramApi.getAcademicProgram()
        .then(r => {
            dispatch(getAcademicProgramsSuccess(r));
            // Determine if academicPrograms have fetched from server
            dispatch(academicProgramFethedSuccess(true));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e);
        });
};

// CREATE
export const CREATE = "POST_ACADEMIC_PROGRAM";

export const newAcademicProgramSuccess = academicProgram => ({
    type: CREATE,
    academicProgram
});

export const newAcademicProgram = academicProgram => (dispatch, getState) => {
    return AcademicProgramApi.newAcademicProgram(academicProgram)
        .then(r => {
            dispatch(newAcademicProgramSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};

// Update
export const UPDATE = "UPDATE_ACADEMIC_PROGRAM";

export const updateAcademicProgramSuccess = academicProgram => ({
    type: UPDATE,
    academicProgram
});

export const updateAcademicProgram = academicProgram => (dispatch, getState) => {
    return AcademicProgramApi.updateAcademicProgram(academicProgram)
        .then(r => {
            dispatch(updateAcademicProgramSuccess(r));
            Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            Promise.reject(e)
        });
};

// DELETE
export const DELETE = "DELETE_ACADEMIC_PROGRAM";

export const deleteAcademicProgramSuccess = idAcademicProgram => ({
    type: DELETE,
    idAcademicProgram
});

export const deleteAcademicProgram = idAcademicProgram => (dispatch, getState) => {
    return AcademicProgramApi.deleteAcademicProgram(idAcademicProgram)
        .then(r => {
            dispatch(deleteAcademicProgramSuccess(idAcademicProgram));
            Promise.resolve(r);
        }).catch(e => {
            Promise.reject(e)
        });
};


