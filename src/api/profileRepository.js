import axios from 'axios';
import {getLocalToken} from './API';

const profileRepository = () => {
    let baseUrl = 'http://localhost:8000/profiles/';

    const newProfile = profile => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: baseUrl,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("", profile)
                .then(r => {
                    console.log(r);
                    resolve(r);
                }).catch(e => {
                    console.log(e.response);
                    reject(e);
            });
        });
    };

    const getProfiles = () => {
         return new Promise( (resolve, reject) =>  {
            const instance = axios.create({
                baseURL: baseUrl,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.get("")
                .then(r => {
                    console.log(r);
                    resolve(r);
                }).catch(e => {
                    console.log(e.response);
                    reject(e);
            });
        });
    };

    const getProfile = idProfile => {
        if (!idProfile) idProfile = "";
        return new Promise( (resolve, reject) =>  {
            const instance = axios.create({
                baseURL: baseUrl,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.get(idProfile + '/')
                .then(r => {
                    console.log(r);
                    resolve(r.data);
                }).catch(e => {
                console.log(e.response);
                reject(e);
            });
        });
    };

    const updateProfile = profile => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: baseUrl,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.patch(profile.id + "/", profile)
                .then(r => {
                    console.log(r);
                    resolve(r);
                }).catch(e => {
                console.log(e.response);
                reject(e);
            });
        });
    };

    const deleteProfile = idProfile => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: baseUrl,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.delete(idProfile + '/')
                .then(r => {
                    console.log(r);
                    resolve(r);
                }).catch(e => {
                console.log(e.response);
                reject(e);
            });
        })
    };

    return {
        newProfile,
        getProfile,
        getProfiles,
        updateProfile,
        deleteProfile
    }
};

export default profileRepository();