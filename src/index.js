import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//configurar material ui
import injectTapEventPlugin from "react-tap-event-plugin";
import {MuiThemeProvider} from "material-ui";
//configurar router dom
import {BrowserRouter} from "react-router-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {MiTema} from "./MiTema";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import {configureStore} from './redux/store/configureStore';


const store = configureStore();

injectTapEventPlugin();
const Tema = getMuiTheme (MiTema);


//Miguelito encapsula a la aplicación con material ui para que se pueda utilizar en todos los componentes, con muiTheme el tema en espe
const Miguelito = () => (
    <MuiThemeProvider muiTheme={Tema}>
        <App/>
    </MuiThemeProvider>
);

const Router = () => (
    <BrowserRouter>
        <Miguelito/>
    </BrowserRouter>
);

const WithRedux = () => (
    <Provider store={store}>
        <Router/>
    </Provider>
);

ReactDOM.render(<WithRedux/>, document.getElementById('root'));
registerServiceWorker();
