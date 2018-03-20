import axios from 'axios';

const collegeRepository = () => {
    const baseURL = 'http://localhost:8000/api/colleges/';
    const tokenName = 'user_uaeh_token';
    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    }
    const newCollege = colleges => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("",colleges)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        });
    };

    const getCollege = () => {
        return new Promise( (resolve, reject) =>{
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.get()
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };

    //Update
    const updateCollege = (college) => {
        return new Promise( (resolve, reject) =>{
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.patch(college.id + '/', college)
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };

    //Delete
    const deleteCollege = (idCollege) =>{
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.delete(idCollege + '/')
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };

    return {
        newCollege,
        getCollege,
        updateCollege,
        deleteCollege
    }
};

export default collegeRepository();