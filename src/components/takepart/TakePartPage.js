import React, {Component} from 'react';
import './TakePartStylesheet.css';
import {Paper, Tab, Tabs} from 'material-ui';
import {Options} from "./Options";
import {SubjectToStudy} from "./SubjectToStudy";
import {connect} from 'react-redux';

class SubjectUAEH {
    constructor(key = "",name = ""){
        this.key = key;
        this.name = name;
    }

    toString(){
        return this.key + this.name;
    }
}

class TakePartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectUAEHFirst : new SubjectUAEH(),
            subjectUAEHSecond : new SubjectUAEH(),
            subjectUAEHThird : new SubjectUAEH()
        };
    }

    handleChange = index => e => {
        let {name,value} = e.target;
        switch (index){
            case 1:
                let subjectUAEHFirst = {...this.state.subjectUAEHFirst};
                subjectUAEHFirst[name] = value;
                console.log(subjectUAEHFirst);
                this.setState({subjectUAEHFirst});
                break;
            case 2:
                let subjectUAEHSecond = {...this.state.subjectUAEHSecond};
                subjectUAEHSecond[name] = value;
                this.setState({subjectUAEHSecond});
                break;
            case 3:
                let subjectUAEHThird = {...this.state.subjectUAEHThird};
                subjectUAEHThird[name] = value;
                this.setState({subjectUAEHThird});
                break;
            default: console.log('No a option');
        }
    };

    render() {
        const {colleges} = this.props;
        const {subjectUAEHFirst,subjectUAEHSecond,subjectUAEHThird} = this.state;
        return (
            <div className="Main-takepart">
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
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHFirst}
                                        index={1}
                                        onChange={this.handleChange}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHSecond}
                                        index={2}
                                        onChange={this.handleChange}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHThird}
                                        index={3}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </Tab>
                            <Tab label="2da opción" >
                                <div className="Tab-style">
                                    <Options
                                        index={"2da"}
                                        dataSource={colleges}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHFirst}
                                        index={1}
                                        onChange={this.handleChange}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHSecond}
                                        index={2}
                                        onChange={this.handleChange}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHThird}
                                        index={3}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </Tab>
                            <Tab label="3ra opción">
                                <div className="Tab-style">
                                    <Options
                                        index={"3ra"}
                                        dataSource={colleges}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHFirst}
                                        index={1}
                                        onChange={this.handleChange}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHSecond}
                                        index={2}
                                        onChange={this.handleChange}
                                    />
                                    <SubjectToStudy
                                        subjectUAEH={subjectUAEHThird}
                                        index={3}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </Tab>
                        </Tabs>
                    </form>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const nameOfColleges = state.colleges.list.map(college => college.name);
    return {
        colleges: nameOfColleges
    }
};

TakePartPage = connect(mapStateToProps,{})(TakePartPage);
export default TakePartPage;