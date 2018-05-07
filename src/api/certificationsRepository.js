import axios from 'axios';

const certificationRepository = () => {
    const baseURL = 'http://localhost:8000/certifications/';

    const tokenName = 'user_uaeh_token';

    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    };

    const newCertification = certification => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("",certification)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        });
    };

    const getCertification = () => {
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

    const updateCertification = (certification) =>{
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.patch(certification.id + '/', certification)
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    //Delete
    const deleteCertification = (idCertification) => {
        return new Promise( (resolve, reject) =>{
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.delete(idCertification + '/')
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    return {
        newCertification,
        getCertification,
        updateCertification,
        deleteCertification
    }
};

export default certificationRepository();