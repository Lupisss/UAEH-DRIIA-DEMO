import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/rootReducer';
import {comprobarUsuario} from "../actions/userActions";


export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    store.dispatch(comprobarUsuario());
    return store;
};