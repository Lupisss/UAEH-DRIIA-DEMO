import axios from 'axios';

const addressRepository = () => {
    const baseURL = 'http://localhost:8000/addresses/';

    const tokenName = 'user_uaeh_token';

    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    };

    const newAddress = address => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.post("",address)
                .then(r => {
                    console.log(r.data);
                    resolve(r.data);
                }).catch(e => {
                    console.log(e.response);
                    reject(e.response);
            });
        });
    };

    const getAddress = () => {
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

    const updateAddress = (address) =>{
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });

            instance.patch(address.id + '/', address)
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };

    //Delete
    const deleteAddress = (idAddress) => {
        return new Promise( (resolve, reject) =>{
            const instance = axios.create({
                baseURL,
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Token " + getLocalToken()
                }
            });
            instance.delete(idAddress + '/')
                .then(r => {
                    resolve(r.data);
                }).catch(e => {
                    console.log(e);
                    reject(e.response);
            });
        });
    };

    return {
        newAddress,
        getAddress,
        updateAddress,
        deleteAddress
    }
};

export default addressRepository();