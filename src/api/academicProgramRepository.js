import axios from 'axios';

const academicProgramRepository = () => {
    const baseURL = 'http://localhost:8000/academic_programs/';
    const tokenName = 'user_uaeh_token';

    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    };

    const newAcademicProgram = academicProgram => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("",academicProgram)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        });
    };

    const getAcademicProgram = () => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.get("")
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    const updateAcademicProgram = (academicProgram) =>{
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.patch(academicProgram.id + '/', academicProgram)
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    //Delete
    const deleteAcademicProgram = (idAcademicProgram) => {
        return new Promise( (resolve, reject) =>{
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.delete(idAcademicProgram + '/')
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    return {
        newAcademicProgram,
        getAcademicProgram,
        updateAcademicProgram,
        deleteAcademicProgram
    }
};

export default academicProgramRepository();