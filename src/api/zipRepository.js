import axios from 'axios';

const ZipRepository = () => {
    const baseUrl = 'https://api-codigos-postales.herokuapp.com/v2/codigo_postal/';

    const getAddress = zip => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL : baseUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.get(zip)
                .then(r => {
                    console.log(r);
                    resolve(r.data);
                })
                .catch(e => {
                    console.log(e);
                    reject(e.response);
                });

        });
    };

    return {
        getAddress : getAddress
    }
};

export default ZipRepository();