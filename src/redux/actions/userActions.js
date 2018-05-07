import firebase from '../../firebase';
//import {api} from '../../api/API';
import {Auth, ProfileApi, AddressApi, CertificationApi} from '../../api/repos';
import {getTutor} from "./tutorActions";
import {getDepartments} from "./departmentsActions";
import {getAcademicPrograms} from "./academicProgramActions";
import {getProfiles} from "./profilesActions";
import {getFiles} from "./fileActions";
import {getColleges} from "./collegesActions";
import {getSubjectsToCurse} from "./subjectToCurseAction";
import academicPrograms from "../reducers/academicProgramsReducer";
//import {usuarioVerificado} from "./usuarioVerificadoActions";
//import {store} from '../../index';

//const db = firebase.database().ref("normalized");
const db = firebase.database().ref();
const usersRef = db.child("dev").child("users");

//const userId = firebase.auth().currentUser.uid;
//import toastr from 'toastr';

//export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const LOGOUT_SUCCESS = "CERRAR_SESION_SUCCESS";

/**************************** Login actions *********************************/
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    user
});

export const logIn = user => (dispatch, getState) => {
    return Auth.logIn(user)
        .then(token => {
            return Auth.getUser()
                .then(r => {
                    console.log('El perfil',r.data);
                    dispatch(loginSuccess(r.data));
                    dispatch(fetchedSuccess());
                    console.log(token);
                    return Promise.resolve(token)
                }).catch(e => {
                    console.log(e);
                });
        }).catch(e => {
            console.log(e);
            return Promise.reject(e);
        });
};
// export const login = user => (dispatch, getState) =>  {
//     return firebase.auth()
//         .signInWithEmailAndPassword(user.email, user.password)
//         .then( u  => {
//             localStorage.setItem('user', JSON.stringify(u) );
//             console.log(u);
//             usersRef.child(u.uid).on( 'value' , snap => {
//                 console.log(snap.val());
//                 u['profile'] = snap.val();
//                 dispatch( loginSuccess(u) );
//             });
//             return Promise.resolve(u);
//         })
//         .catch((error) => {
//             console.log(error);
//             const errorCode = error.code;
//             let errorMessage = '';
//             if (errorCode === 'auth/user-not-found') {
//                 errorMessage = 'Usuario no encontrado';
//             } else if (errorCode === 'auth/wrong-password') {
//                 errorMessage = 'La contraseña es inválida';
//             }
//
//             console.log('Algo estuvo mal ',error );
//             return Promise.reject(error.message);
//             ////toastr.error(errorMessage);
//         });
//
// };

// nuevo perfil en blanco
let profileProto = {
    gender: "M",
    academicId: "",
    birth_date: null,
    curp: "",
    about: "",
    passport_number: "",
    ssn_number: "",
    ssn_expiry_date: null,
    vote_key: "",
    secondary_email: "",
    phone_number: "",
    cellphone_number: "",
    credits_coursed: 0.0,
    grade: 0.0,
    current_semester: 1,
    credit_percentage_coursed: 0.0,
    nationality: "",
    profilePicture: null,
    wallPicture: null,
    user: null,
    tutor: null,
    nationality: "",
    academic_program: null,
    given_name: "",
    surname: ""
};

export const signin = (user) => (dispatch, getState) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(snap => {
            usersRef.push(user);
            return Promise.resolve(snap);
        })
        .catch(error => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            return Promise.reject(error);
        });
};

export const signUp = user => (dispatch, getState) => {
    return Auth.signUp(user)
        .then(tokenR => {
            return Auth.getUser()
                .then(userR => {
                    profileProto.user = userR.data.id;
                    profileProto.given_name = user.given_name;
                    profileProto.surname = user.surname;
                    userR.data.profile = profileProto;
                    return ProfileApi.newProfile(profileProto)
                        .then(profileR => {
                            dispatch(loginSuccess(userR.data));
                            return Promise.resolve(userR.data);
                        }).catch(e => {
                            console.log(e.response);
                            return Promise.reject(e.response);
                        });
                }).catch(e => {
                    console.log(e.response);
                    return Promise.reject(e.response)
            });
        }).catch(e => {
            console.log(e.response);
            return Promise.reject(e.response)
        });
};

export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const updateProfileSuccess = profile => ({
    type: UPDATE_PROFILE,
    profile
});

export const updateProfile = profile => (dispatch, getState) => {
    let copyProfile = JSON.parse(JSON.stringify(profile));
    copyProfile.user = getState().user.info.id;
    copyProfile.academic_program = profile.academic_program.id;
    return ProfileApi.updateProfile(copyProfile)
        .then(r => {
            // let myprofile = {...r.data};
            // myprofile.academic_program = getState().academicPrograms.list.filter(aP =>
            //     aP.id == myprofile.academic_program
            // )[0];
            // console.log(myprofile);
            console.log('Esto envio: ',profile);
            dispatch(updateProfileSuccess(profile));
            return Promise.resolve(profile);
        }).catch(e => {
            console.log(e);
            return Promise.reject(e.response)
        });
};

/**
 *      Addresses
 ***/

export const ADD_NEW_ADDRESS = "ADD_NEW_ADDRESS";

export const addNewAddressToProfileSuccess = address => ({
    type: ADD_NEW_ADDRESS,
    address
});

export const addNewAddressToProfile = address => (dispatch, getState) => {
    return AddressApi.newAddress(address)
        .then(r => {
            dispatch(addNewAddressToProfileSuccess(r))
        }).catch(e => {
            console.log(e);
        });

};

 // ACTUALIZAR LA DIRECCION DEL PERFIL
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";

export const updateAddressToProfileSuccess = address => ({
    type: UPDATE_ADDRESS,
    address
});

export const updateAddressToProfile = address => (dispatch, getState) => {
    return AddressApi.updateAddress(address)
        .then(r => {
            console.log(r);
            dispatch(updateAddressToProfileSuccess(r))
        }).catch(e => {
            console.log(e);
        });

};

// ELIMINAR DIRECCION DEL PERFIL

export const DELETE_ADDRESS = "DELETE_ADDRESS";

export const deleteAddressToProfileSuccess = idAddress => ({
    type: DELETE_ADDRESS,
    idAddress
});

export const deleteAddressToProfile = idAddress => (dispatch, getState) => {
    return AddressApi.deleteAddress(idAddress)
        .then(r => {
            console.log(r);
            dispatch(deleteAddressToProfileSuccess(idAddress))
        }).catch(e => {
            console.log(e);
        });

};

/**************************************/

/**
 *      Certifications
 ***/

export const ADD_NEW_CERTIFICATION = "ADD_NEW_CERTIFICATION";

export const addNewCertificationToProfileSuccess = certification => ({
    type: ADD_NEW_CERTIFICATION,
    certification
});

export const addNewCertificationToProfile = certification => (dispatch, getState) => {
    return CertificationApi.newCertification(certification)
        .then(r => {
            dispatch(addNewCertificationToProfileSuccess(r))
        }).catch(e => {
            console.log(e);
        });

};

// ACTUALIZAR LA DIRECCION DEL PERFIL
export const UPDATE_CERTIFICATION = "UPDATE_CERTIFICATION";

export const updateCertificationToProfileSuccess = certification => ({
    type: UPDATE_CERTIFICATION,
    certification
});

export const updateCertificationToProfile = certification => (dispatch, getState) => {
    return CertificationApi.updateCertification(certification)
        .then(r => {
            console.log(r);
            dispatch(updateCertificationToProfileSuccess(r))
        }).catch(e => {
            console.log(e);
        });

};

// ELIMINAR DIRECCION DEL PERFIL

export const DELETE_CERTIFICATION = "DELETE_CERTIFICATION";

export const deleteCertificationToProfileSuccess = certificationId => ({
    type: DELETE_CERTIFICATION,
    certificationId
});

export const deleteCertificationToProfile = certificationId => (dispatch, getState) => {
    return CertificationApi.deleteCertification(certificationId)
        .then(r => {
            console.log(r);
            dispatch(deleteCertificationToProfileSuccess(certificationId))
        }).catch(e => {
            console.log(e);
        });

};

/**************************************/

const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});

export const logOut = () => (dispatch, getState) => {
    return Auth.logOut()
        .then(r => {
            dispatch(logoutSuccess());
            return Promise.resolve(r);
        }).catch(error => {
            return Promise.reject(error);
        });

};

// const updateUserSuccess = user => ({
//         type:UPDATE_USER_SUCCESS,
//         user
// });


// export function registrarEIniciarSesion(user) {
//     return function (dispatch, getState) {
//         return firebase.auth()
//             .createUserWithEmailAndPassword(user.email, user.password)
//             .then((u) => {
//                 const user = formatUser(u);
//                 //touched by bliss Hand
//                 let updates = {
//                     [`dev/users/${user.id}`]:user,
//                 };
//                 db.update(updates);
//                 localStorage.setItem('user', JSON.stringify(u));
//                 dispatch(loginSuccess(user));
//                 return Promise.resolve(u);
//             })
//             .catch(function(error) {
//                 //var errorCode = error.code;
//                 let errorMessage = error.message;
//                 console.log('something wrong ' + errorMessage);
//                 //toastr.error('something wrong ' + errorMessage);
//                 return Promise.reject(error.message);
//             });
//     }
// }

// export const updateProfile = (user) =>  (dispatch) => {
//     //Touched by Bliss hand
//     let updates = {
//         [`dev/users/${user.id} `]:user
//     };
//     return db.update(updates)
//         .then(()=>{
//             dispatch(updateUserSuccess(user));
//             return Promise.resolve();
//         })
//         .catch(e=>Promise.reject(e.message));
//
//
// };


// export function cerrarSesion() {
//     return function (dispatch,getState) {
//         return firebase.auth().signOut()
//             .then( () => {
//                 dispatch(logoutSuccess());
//                 localStorage.removeItem("user");
//             }).catch( (error) => {
//                 console.error('No pude salir');
//             });
//
//     }
// }
const tokenName = 'user_uaeh_token';

export const IS_FETCHED = "IS_FETCHED";

export const fetchedSuccess = () => ({
    type: IS_FETCHED,
    isFetched:true
});

export function comprobarUsuario() {
    return function (dispatch, getState) {
        let user = JSON.parse(localStorage.getItem(tokenName));
        if (user) {
            return Auth.getUser()
                .then(r => {
                    dispatch(loginSuccess(r.data));
                    dispatch(getTutor());
                    dispatch(getDepartments());
                    dispatch(getAcademicPrograms());
                    dispatch(getProfiles());
                    dispatch(getFiles());
                    dispatch(getColleges());
                    // TODO Crear modelo de subjects to course en backend
                    //dispatch(getSubjectsToCurse());
                    dispatch(fetchedSuccess());
                }).catch(e => {
                    console.log(e);
            });
        }
    }
}

export const isLogged = () => {
    return JSON.parse(localStorage.getItem(tokenName));
};


//formatters:

// function formatUser(u){
//     return {
//         id:u.uid,
//         email:u.email
//     }
// }


//profile actions
// export const toggleFollow = (followId) => (dispatch, getState) => {
//     //console.log(followId);
//     const user = getState().usuario;
//     //console.log(user);
//     let mensaje;
//     let updates = {};
//     let followingExists = false;
//     if (user.following) followingExists = true;
//     if(followingExists && user.following[followId]){
//         mensaje = "Has dejado de seguir a este usuario";
//         //console.log("entré putito");
//         updates[`dev/users/${user.id}/following/${followId}`]=null;
//         updates[`dev/users/${followId}/followers/${user.id}`]=null;
//     }else{
//         mensaje = "Ahora estás siguiendo a este usuario";
//         //console.log("yo no entré putito");
//         updates[`dev/users/${user.id}/following/${followId}`]=true;
//         updates[`dev/users/${followId}/followers/${user.id}`]=true;
//         //mail
//         updates[`dev/mail/${user.id}`] = {follower:user.id, following:followId};
//     }
//     return db.update(updates)
//         .then(()=>{
//             return Promise.resolve(mensaje);
//         })
//         .catch(e=>{
//             //console.log(e);
//             return Promise.reject(e.message);
//         });
//
//
// };


//listeners
// firebase.auth().onAuthStateChanged(user=>{
//    if(user) {
//        //touched by bliss Hand
//        return db.child('users/' + user.uid ).once("value")
//            .then(s=>{
//                if(!s.val()) return;
//                store.dispatch(iniciarSesionSuccess(s.val()));
//                localStorage.setItem("user", JSON.stringify(user));
//
//            });
//    }
// });

//update user programmatically
//listen the logged user changes
// export const listenUserChanges = (uid) =>(dispatch, getState)=>{
//     //console.log("corriendo y stalkeando");
//     console.log(uid);
//     usersRef.child(uid).on("value", snap=>{
//         //console.log(snap.val());
//     }) ;
// };