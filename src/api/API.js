import axios from 'axios';

const collegesUrl = 'http://localhost:8000/api/collegeapi/';

export const api = {
    getColleges: () => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.get()
                .then( r => {
                    console.log(r);
                    resolve(r.data)
                }).catch( error => {
                    console.error(error)
                    reject(error.response)
            });
        });
    },
    newCollege : (college) => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.post('',college)
                .then( r => {
                    console.log(r);
                    resolve(r.data)
                }).catch( error => {
                console.error(error);
                reject(error.response)
            })
        })
    },
    updateCollege : (college) => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.patch(college.id + '/',college)
                .then( r => {
                    console.log(r);
                    resolve(r.data)
                }).catch( error => {
                console.error(error);
                reject(error.response)
            })
        })
    },
    removeCollege: (id) => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.delete(id + '/')
                .then( r => {
                    console.log(r);
                    resolve(r.data)
                }).catch( error => {
                console.error(error);
                reject(error.response)
            })
        })
    }
}