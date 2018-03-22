import axios from 'axios';

const tutorRepository = () => {
    const baseURL = 'http://localhost:8000/api/tutor/';

    const tokenName = 'user_uaeh_token';

    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    };

    const newTutor = tutor => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("", tutor)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                    console.log(e.response);
                    reject(e.response);
            });
        });
    };

    const getTutor = () => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.get("")
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };

    //////////////////////////////////Update
    const updateTutor = (tutor) => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.patch(tutor.id + '/', tutor)
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };
    //////////////////Delete

    const deleteTutor = (idTutor) => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.delete(idTutor + '/')
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };

    return {
        newTutor,
        getTutor,
        updateTutor,
        deleteTutor
    }
};

export default tutorRepository();