import axios from 'axios';

let debug = true;

//Working on localhost
//Localhost urls
let loginUrl = 'http://localhost:8000/rest-auth/login/';
let signupUrl = 'http://localhost:8000/rest-auth/registration/';
let collegesUrl = 'http://localhost:8000/api/collegeapi/';
// Production urls
if (!debug) {
    //let collegesUrl = 'http://uaeh.herokuapp.com/api/collegeapi';
}

const tokenName = 'user_uaeh_token';
// Axios functions
export const api = {
    /** User functions  **/
    logIn: user => {
        return new Promise( (resolve, reject) => {
            const instance = axios.create({
                baseURL: loginUrl,
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            instance.post('', user)
                .then( r => {
                    localStorage.setItem(tokenName, JSON.stringify(r.data.key));
                    resolve(r.data);
                }).catch( e => {
                    console.log(e);
                    reject(e);
            });
        });
    },
    signUp : user => {
        return new Promise( (resolve,reject) => {
           const instance = axios.create({
               baseURL: signupUrl,
               headers: {
                   'Content-Type' : 'application/json'
               }
           });
           instance.post('', user)
               .then( r => {
                   localStorage.setItem(tokenName, JSON.stringify(r.data.key));
                   resolve(r.data);
               }).catch( e => {
                    console.log(e);
                    reject(e);
           });
        });
    },
    /** End user functions **/
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
};