import React from 'react';
import { Tabs, Tab, Paper, RaisedButton} from 'material-ui';
import {Options} from "./Options";

export const TakePartComponent = ({props}) => {
    return (
        <Paper className="Main-form-tp" zDepth={3}>
            <form  style={{textAlign:'left'}}>
                <Tabs>
                    <Tab label="1ra opción" >
                        <div className="Tab-style">
                            {/*<h2 style={{marginLeft:50}}><small>Universidades Destino <span style={{color:'gray'}}><small>Selecciona tus opciones</small></span></small></h2>*/}
                            <Options
                                index={"1ra"}
                                dataSource={colleges}
                            />
                        </div>
                    </Tab>
                    <Tab label="2da opción" >
                        <div className="Tab-style">
                            <Options
                                index={"2da"}
                                dataSource={colleges}
                            />
                        </div>
                    </Tab>
                    <Tab label="3ra opción">
                        <div className="Tab-style">
                            <Options
                                index={"3ra"}
                                dataSource={colleges}
                            />
                            <RaisedButton
                                style={{margin:'15px 60px'}}
                                primary={true}
                                label="Enviar solicitud"
                            />
                        </div>
                    </Tab>
                </Tabs>
            </form>
        </Paper>
    );
};

const colleges = [
    'MISSOURI SOUTHERN STATE UNIVERSITY',
    'THE UNIVERSITY OF TEXAS AT ARLINGTON',
    'INDIANA UNIVERSITY',
];