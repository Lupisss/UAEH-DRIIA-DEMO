import axios from 'axios';

const subjectToCurseRepository = () => {
    const baseURL = 'http://localhost:8000/api/subjectToCurses/';
    const tokenName = 'user_uaeh_token';

    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    };

    const newSubjectToCurse = subjectToCurse => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("",subjectToCurse)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        });
    };

    const getSubjectToCurse = () => {
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

    const updateSubjectToCurse = (subjectToCurse) =>{
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.patch(subjectToCurse.id + '/', subjectToCurse)
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    //Delete
    const deleteSubjectToCurse = (idSubjectToCurse) => {
        return new Promise( (resolve, reject) =>{
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.delete(idSubjectToCurse + '/')
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    return {
        newSubjectToCurse,
        getSubjectToCurse,
        updateSubjectToCurse,
        deleteSubjectToCurse
    }
};

export default subjectToCurseRepository();