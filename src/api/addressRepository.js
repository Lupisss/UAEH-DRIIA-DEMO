import axios from 'axios';

const addressRepository = () => {
    const baseUrl = 'http://localhost:8000/api/addresses/';
    const tokenName = 'user_uaeh_token';
    const getLocalToken = () => {
        return JSON.parse(localStorage.getItem(tokenName))
    }
    const newAddress = address => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseUrl,
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
            })
        })
    }
    return {};
}
