import React, {Component, Fragment} from 'react';
import './TakePartStylesheet.css';
import {Paper, RaisedButton, Tab, Tabs} from 'material-ui';
import {Options} from "./Options";
import {SubjectToStudy} from "./SubjectToStudy";
import {MainLoader} from '../loader/Loader';
import {connect} from 'react-redux';

class SubjectUAEH {
    constructor(key = "", name = "") {
        this.key = key;
        this.name = name;
    }

    toString() {
        return this.key + this.name;
    }
}

class Option {
    constructor(college = null, country = "", academicProgram = "") {
        this.college = college;
        this.country = country;
        this.academicProgram = academicProgram;
    }

    toString() {
        return this.college + this.country + this.academicProgram;
    }
}

class TakePartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectUAEHFirst: new SubjectUAEH(),
            subjectUAEHSecond: new SubjectUAEH(),
            subjectUAEHThird: new SubjectUAEH(),
            subjectUAEHForth: new SubjectUAEH(),
            optionOne: new Option(),
            optionTwo: new Option(),
            optionThree: new Option()
        };
    }

    componentWillMount() {
        let subjectsToCourse = JSON.parse(JSON.stringify(this.props.subjectsToCourse));
        let optionOne = new Option();
        let optionTwo = new Option();
        let optionThree = new Option();
        let i = 0;
        let namesSubjets = ["subjectUAEHFirst","subjectUAEHSecond","subjectUAEHThird","subjectUAEHForth"];
        let state = {};
        subjectsToCourse.forEach(subject => {
            if (subject.homologaciones) {
                let first = subject.homologaciones.filter(homologacion => homologacion.priority == '1')[0];
                if(first)
                    if (first.college) {
                        optionOne = new Option(first.college.id, first.college.country, first.academic_program);
                    }
                let second = subject.homologaciones.filter(homologacion => homologacion.priority == '2')[0];
                if(second)
                    if (second.college) {
                        optionTwo = new Option(second.college.id, second.college.country, second.academic_program);
                    }
                let third = subject.homologaciones.filter(homologacion => homologacion.priority == '3')[0];
                if(third)
                    if (third.college) {
                        optionThree = new Option(third.college.id, third.college.country, third.academic_program);
                    }
            }
            state[namesSubjets[i++]] = new SubjectUAEH(subject.key, subject.name);
        });

        state["optionOne"] = optionOne;
        state["optionTwo"] = optionTwo;
        state["optionThree"] = optionThree;

        this.setState(state);
    }

    componentWillReceiveProps(nP) {
        let subjectsToCourse = JSON.parse(JSON.stringify(nP.subjectsToCourse));
        let optionOne = new Option();
        let optionTwo = new Option();
        let optionThree = new Option();
        let i = 0;
        let namesSubjets = ["subjectUAEHFirst","subjectUAEHSecond","subjectUAEHThird","subjectUAEHForth"];
        let state = {};
        subjectsToCourse.forEach(subject => {
            if (subject.homologaciones) {
                let first = subject.homologaciones.filter(homologacion => homologacion.priority == '1')[0];
                if(first)
                    if (first.college) {
                        optionOne = new Option(first.college.id, first.college.country, first.academic_program);
                    }
                let second = subject.homologaciones.filter(homologacion => homologacion.priority == '2')[0];
                if(second)
                    if (second.college) {
                        optionTwo = new Option(second.college.id, second.college.country, second.academic_program);
                    }
                let third = subject.homologaciones.filter(homologacion => homologacion.priority == '3')[0];
                if(third)
                    if (third.college) {
                        optionThree = new Option(third.college.id, third.college.country, third.academic_program);
                    }
            }
            state[namesSubjets[i++]] = new SubjectUAEH(subject.key, subject.name);
        });

        state["optionOne"] = optionOne;
        state["optionTwo"] = optionTwo;
        state["optionThree"] = optionThree;

        this.setState(state);
    }

    handleChange = index => e => {
        let {name, value} = e.target;
        switch (index) {
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
            case 4:
                let subjectUAEHForth = {...this.state.subjectUAEHForth};
                subjectUAEHForth[name] = value;
                this.setState({subjectUAEHForth});
                break;
            default:
                console.log('No a option');
        }
    };

    handleCollegeOptionChange = name => (event, index, value) => {
        let option = JSON.parse(JSON.stringify(this.state[name]));
        option.college = value;
        let college = this.props.colleges.filter(college => college.id == value)[0];
        option.country = college.country;
        this.setState({[name]: option});
    };

    handleOptionChange = name => event => {
        let option = JSON.parse(JSON.stringify(this.state[name]));
        option[event.target.name] = event.target.value;
        this.setState({[name]: option});
    };


    render() {
        const {colleges, fetched} = this.props;
        const {subjectUAEHFirst, subjectUAEHSecond, subjectUAEHThird,subjectUAEHForth, optionOne, optionTwo, optionThree} = this.state;
        return (
            <Fragment>
                {!fetched ? <MainLoader/> :
                    <div className="Main-takepart">
                        <Paper className="Main-form-tp" zDepth={3}>
                            <Tabs>
                                <Tab label="1ra opción">
                                    <form className="Tab-style">
                                        {/*<h2 style={{marginLeft:50}}><small>Universidades Destino <span style={{color:'gray'}}><small>Selecciona tus opciones</small></span></small></h2>*/}
                                        <Options
                                            handleCollegeOptionChange={this.handleCollegeOptionChange}
                                            handleOptionChange={this.handleOptionChange}
                                            index={"1ra"}
                                            dataSource={colleges}
                                            option={optionOne}
                                            optionName={"optionOne"}
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
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                        />
                                        <Title>Primera opción</Title>
                                        <SubmitButton/>
                                    </form>
                                </Tab>
                                <Tab label="2da opción">
                                    <form className="Tab-style">
                                        <Title>Segunda opción</Title>
                                        <Options
                                            handleOptionChange={this.handleOptionChange}
                                            handleCollegeOptionChange={this.handleCollegeOptionChange}
                                            index={"2da"}
                                            dataSource={colleges}
                                            option={optionTwo}
                                            optionName={"optionTwo"}
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
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                        />
                                        <SubmitButton/>
                                    </form>
                                </Tab>
                                <Tab label="3ra opción">
                                    <form className="Tab-style">
                                        <Title>Tercera opción</Title>
                                        <Options
                                            handleOptionChange={this.handleOptionChange}
                                            handleCollegeOptionChange={this.handleCollegeOptionChange}
                                            index={"3ra"}
                                            dataSource={colleges}
                                            option={optionThree}
                                            optionName={"optionThree"}
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
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                        />
                                        <SubmitButton/>
                                    </form>
                                </Tab>
                            </Tabs>
                        </Paper>
                    </div>
                }
            </Fragment>
        );
    }
}

const Title = (props) => (
    <div style={{width: '100%'}}>
        {/*<h2 style={{width:'50%', textAlign:'center', margin: 'auto', marginBottom: 20}}>{props.children}</h2>*/}
        <p id={"title"}>{props.children}</p>
    </div>
);

const SubmitButton = ({...props}) => (
    <RaisedButton className={"submitButton"} type={"submit"} primary label={"Guardar"}/>
);

const mapStateToProps = (state, ownProps) => {
    return {
        colleges: state.colleges.list,
        subjectsToCourse: state.subjectsToCourse.list,
        fetched: state.colleges.areFetched
    }
};

TakePartPage = connect(mapStateToProps, {})(TakePartPage);
export default TakePartPage;