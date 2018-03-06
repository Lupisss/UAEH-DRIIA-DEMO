// importar axios from axios
import axios from 'axios';
// Variable para determinar si es local o e producción
let debug = true;

//Working on localhost
//Localhost urls
let loginUrl = 'http://localhost:8000/rest-auth/login/';
let signupUrl = 'http://localhost:8000/rest-auth/registration/';
let logoutUrl = 'http://localhost:8000/rest-auth/logout/';
let userUrl = 'http://localhost:8000/rest-auth/user/';
let collegesUrl = 'http://localhost:8000/api/collegeapi/';
let profileUrl = 'http://localhost:8000/api/publicprofile/';

// Production urls
if (!debug) {
    //let collegesUrl = 'http://uaeh.herokuapp.com/api/collegeapi';
}

const tokenName = 'user_uaeh_token';
// Axios functions
// Crear un objeto de funciones
// Necesitamos comunicarnos con el servidor,
// axios se encarga de gestionar dicha comunicación
// clave valor, donde la clave es el nombre y el valor
// es una función o arrow function
export const api = {
    /** User functions  **/
    logIn: user => {
        // Retornar una nueva promesa, la promesa es como un try catch
        // el constructor recibe una funcion (arrow function)
        // donde recibe resolve y reject
        return new Promise((resolve, reject) => {
            // Creamos una instancia de axios, para poder
            // comunicarnos con el servidor
            // axios.create recibe un objeto en donde pasamos
            // baseURL y headers
            const instance = axios.create({
                //baseURL es la url del endpoint
                baseURL: loginUrl,
                // headers es lo necesario para hacer la petición
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Ejecutamos un método http, el primer argumento es
            // la url (si queremos agregar algo más a la url)
            // el segundo es el objeto con la información
            // necesaria
            instance.post('', user)
                .then(r => {
                    // si es correcto
                    // guardamos el resultado (el token de Django)
                    // en la base de datos (Local Storage)
                    // El primer argumento es el nombre con el que se va a guardar
                    // El segundo es la información que se guardara
                    // Siempre debe hacer una llamada a JSON.stringify
                    localStorage.setItem(tokenName, JSON.stringify(r.data.key));
                    // si es correcto, mediante resolve, retornamos la Promise
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                // Si algo salio mal, mediante reject, retornamos la promise
                reject(e.response);
            });
        });
    },
    signUp: user => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL: signupUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.post('', user)
                .then(r => {
                    localStorage.setItem(tokenName, JSON.stringify(r.data.key));
                    resolve(r.data);
                }).catch(e => {
                console.log(e);
                reject(e.response);
            });
        });
    },
    logOut: () => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL: logoutUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.post('', {})
                .then(r => {
                    localStorage.removeItem(tokenName);
                    resolve(r.data);
                }).catch(e => {
                reject(e.response);
            });
        });
    },
    getUser: () => {
        return new Promise( (resolve, reject) => {
            const userToken = JSON.parse(localStorage.getItem(tokenName));
            const instance = axios.create({
                baseURL: userUrl,
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.get('')
                .then(r => {
                    console.log(r);
                    resolve(r);
                })
                .catch(e => {
                    console.log(e.response);
                    reject(e.response)
                }) ;
        });
    },
    setProfile: profile => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL: profileUrl
            });
            instance.post('', profile)
                .then(r => {

                }).catch(e => {

            });
        });
    },
    /** End user functions **/
    getColleges: () => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.get()
                .then(r => {
                    console.log(r);
                    resolve(r.data)
                }).catch(error => {
                console.error(error);
                reject(error.response)
            });
        });
    },
    newCollege: (college) => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.post('', college)
                .then(r => {
                    console.log(r);
                    resolve(r.data)
                }).catch(error => {
                console.error(error);
                reject(error.response)
            })
        })
    },
    updateCollege: (college) => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.patch(college.id + '/', college)
                .then(r => {
                    console.log(r);
                    resolve(r.data)
                }).catch(error => {
                console.error(error);
                reject(error.response)
            })
        })
    },
    removeCollege: (id) => {
        return new Promise((resolve, reject) => {
            const userToken = JSON.parse(localStorage.getItem(tokenName));
            const instance = axios.create({
                baseURL: collegesUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.delete(id + '/')
                .then(r => {
                    console.log(r);
                    resolve(r.data)
                }).catch(error => {
                console.error(error);
                reject(error.response)
            })
        })
    }
};