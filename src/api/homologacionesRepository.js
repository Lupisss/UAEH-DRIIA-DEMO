import axios from 'axios';

const homologacionRepository = () => {
    const baseURL = 'http://localhost:8000/homologaciones/';

    const tokenName = 'user_uaeh_token';

    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    };

    const newHomologacion = homologacion => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("",homologacion)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e.response);
            });
        });
    };

    const getHomologacion = () => {
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

    const updateHomologacion = (homologacion) =>{
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.patch(homologacion.id + '/', homologacion)
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    //Delete
    const deleteHomologacion = (idHomologacion) => {
        return new Promise( (resolve, reject) =>{
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.delete(idHomologacion + '/')
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    };

    return {
        newHomologacion,
        getHomologacion,
        updateHomologacion,
        deleteHomologacion
    }
};

export default homologacionRepository();