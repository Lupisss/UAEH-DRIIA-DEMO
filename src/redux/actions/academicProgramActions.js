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
            // let academicP =  JSON.parse(JSON.stringify(r));
            // let department = [...getState().departments.list.filter( department =>
            //     academicP.department == department.id
            // )];
            // department = department[0];
            // let depa = {
            //     id: department.id,
            //     name: department.name,
            //     college: department.college.id
            // };
            // academicP.department = depa;
            // console.log(academicP);
            // dispatch(newAcademicProgramSuccess(academicP));
            dispatch(getAcademicPrograms());
            return Promise.resolve(r);
        }).catch(e => {
            return Promise.reject(e)
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
            // let academicP =  JSON.parse(JSON.stringify(r));
            // let department = [...getState().departments.list.filter( department =>
            //     academicP.department == department.id
            // )];
            // department = department[0];
            // let depa = {
            //     id: department.id,
            //     name: department.name,
            //     college: department.college.id
            // };
            // academicP.department = depa;
            // console.log(academicP);
            // dispatch(updateAcademicProgramSuccess(academicP));
            dispatch(getAcademicPrograms());
            return Promise.resolve(r);
        }).catch(e => {
            console.log(e);
            return Promise.reject(e)
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


