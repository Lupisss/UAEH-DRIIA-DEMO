import React, {Component, Fragment} from 'react';
import './TakePartStylesheet.css';
import {Paper, RaisedButton, Tab, Tabs} from 'material-ui';
import {Options} from "./Options";
import {SubjectToStudy} from "./SubjectToStudy";
import {MainLoader} from '../loader/Loader';
import {connect} from 'react-redux';
import HomolaacionApi from '../../api/homologacionesRepository';
import SubjectApi from '../../api/subjectToCourseApi';
import {getSubjectsToCourse} from '../../redux/actions/subjectsToCourseActions';
import toastr from 'toastr';

class SubjectUAEH {
    constructor(id, key = "", name = "") {
        this.id = id;
        this.key = key;
        this.name = name;
    }

    toString() {
        return this.key + this.name;
    }
}

class Subject {
    constructor(id, key = "", name = "") {
        this.id = id;
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
            homo1: new Subject(),
            homo2: new Subject(),
            homo3: new Subject(),
            homo4: new Subject(),
            homo5: new Subject(),
            homo6: new Subject(),
            homo7: new Subject(),
            homo8: new Subject(),
            homo9: new Subject(),
            homo10: new Subject(),
            homo11: new Subject(),
            homo12: new Subject(),
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
        let j = 1;
        let namesSubjets = ["subjectUAEHFirst","subjectUAEHSecond","subjectUAEHThird","subjectUAEHForth"];
        let state = {};
        subjectsToCourse.forEach(subject => {
            if (subject.homologaciones) {
                let first = subject.homologaciones.filter(homologacion => homologacion.priority == '1')[0];
                if(first) {
                    state[`homo${j++}`] = new Subject(first.id,first.key, first.name);
                    if (first.college) {
                        optionOne = new Option(first.college.id, first.college.country, first.academic_program);
                    }
                }
                let second = subject.homologaciones.filter(homologacion => homologacion.priority == '2')[0];
                if(second) {
                    state[`homo${j++}`] = new Subject(second.id,second.key, second.name);
                    if (second.college) {
                        optionTwo = new Option(second.college.id, second.college.country, second.academic_program);
                    }
                }
                let third = subject.homologaciones.filter(homologacion => homologacion.priority == '3')[0];
                if(third) {
                    state[`homo${j++}`] = new Subject(third.id, third.key, third.name);
                    if (third.college) {
                        optionThree = new Option(third.college.id, third.college.country, third.academic_program);
                    }
                }
            }
            state[namesSubjets[i++]] = new SubjectUAEH(subject.id, subject.key, subject.name);
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
        let j = 1;
        let namesSubjets = ["subjectUAEHFirst","subjectUAEHSecond","subjectUAEHThird","subjectUAEHForth"];
        let state = {};
        subjectsToCourse.forEach(subject => {
            if (subject.homologaciones) {
                let first = subject.homologaciones.filter(homologacion => homologacion.priority == '1')[0];
                if(first) {
                    state[`homo${j++}`] = new Subject(first.id, first.key, first.name);
                    if (first.college) {
                        optionOne = new Option(first.college.id, first.college.country, first.academic_program);
                    }
                }
                let second = subject.homologaciones.filter(homologacion => homologacion.priority == '2')[0];
                if(second) {
                    state[`homo${j++}`] = new Subject(second.id, second.key, second.name);
                    if (second.college) {
                        optionTwo = new Option(second.college.id, second.college.country, second.academic_program);
                    }
                }
                let third = subject.homologaciones.filter(homologacion => homologacion.priority == '3')[0];
                if(third) {
                    state[`homo${j++}`] = new Subject(third.id, third.key, third.name);
                    if (third.college) {
                        optionThree = new Option(third.college.id, third.college.country, third.academic_program);
                    }
                }
            }
            state[namesSubjets[i++]] = new SubjectUAEH(subject.id, subject.key, subject.name);
        });

        state["optionOne"] = optionOne;
        state["optionTwo"] = optionTwo;
        state["optionThree"] = optionThree;

        this.setState(state);
    }

    handleHomoChange = name => e => {
        let homo = JSON.parse(JSON.stringify(this.state[name]));
        homo[e.target.name] = e.target.value;
        this.setState({[name]:homo});
    };

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


    handleSubmit1 = e => {
        e.preventDefault();
        let homo1 = JSON.parse(JSON.stringify(this.state.homo1));
        let homo4 = JSON.parse(JSON.stringify(this.state.homo4));
        let homo7 = JSON.parse(JSON.stringify(this.state.homo7));
        let homo10 = JSON.parse(JSON.stringify(this.state.homo10));
        let subject1 = JSON.parse(JSON.stringify(this.state.subjectUAEHFirst));
        let subject2 = JSON.parse(JSON.stringify(this.state.subjectUAEHSecond));
        let subject3 = JSON.parse(JSON.stringify(this.state.subjectUAEHThird));
        let subject4 = JSON.parse(JSON.stringify(this.state.subjectUAEHForth));
        let subjects = [subject1,subject2, subject3, subject4];
        let subjectsToUpdate = subjects.map( subject => {
            return SubjectApi.updateSubjectToCourse(subject)
        });
        let homos = [homo1,homo4,homo7,homo10];
        let homosToUpdate = homos.map( homo => {
            homo.academic_program = this.state.optionOne.academicProgram;
            homo.college = this.state.optionOne.college;
            return HomolaacionApi.updateHomologacion(homo)
        });
        setTimeout(()=> console.log(homo10),1000);
        Promise.all(subjectsToUpdate)
            .then(subjects => {
                console.log(subjects);
                Promise.all(homosToUpdate)
                    .then(values => {
                        console.log(values);
                        this.props.getSubjectsToCourse();
                        toastr.success("Materias actualizadas");
                    }).catch( e => {
                        toastr.error("Oops algo salió mal");
                        console.log(e)
                });// End promise All homos to update
            }).catch(e => {
                toastr.error("Oops algo salió mal");
        });// End promise All subjects
    };

    handleSubmit2 = e => {
        e.preventDefault();
        let homo2 = JSON.parse(JSON.stringify(this.state.homo2));
        let homo5 = JSON.parse(JSON.stringify(this.state.homo5));
        let homo8 = JSON.parse(JSON.stringify(this.state.homo8));
        let homo11 = JSON.parse(JSON.stringify(this.state.homo11));
        let subject1 = JSON.parse(JSON.stringify(this.state.subjectUAEHFirst));
        let subject2 = JSON.parse(JSON.stringify(this.state.subjectUAEHSecond));
        let subject3 = JSON.parse(JSON.stringify(this.state.subjectUAEHThird));
        let subject4 = JSON.parse(JSON.stringify(this.state.subjectUAEHForth));
        let subjects = [subject1,subject2, subject3, subject4];
        let subjectsToUpdate = subjects.map( subject => {
            return SubjectApi.updateSubjectToCourse(subject)
        });
        let homos = [homo2,homo5,homo8,homo11];
        let homosToUpdate = homos.map( homo => {
            homo.academic_program = this.state.optionTwo.academicProgram;
            homo.college = this.state.optionTwo.college;
            return HomolaacionApi.updateHomologacion(homo)
        });
        Promise.all(subjectsToUpdate)
            .then(subjects => {
                console.log(subjects);
                Promise.all(homosToUpdate)
                    .then(values => {
                        console.log(values);
                        this.props.getSubjectsToCourse();
                        toastr.success("Materias actualizadas");
                    }).catch( e => {
                    toastr.error("Oops algo salió mal");
                    console.log(e)
                });// End promise All homos to update
            }).catch(e => {
            toastr.error("Oops algo salió mal");
        });// End promise All subjects
    };

    handleSubmit3 = e => {
        e.preventDefault();
        let homo3 = JSON.parse(JSON.stringify(this.state.homo3));
        let homo6 = JSON.parse(JSON.stringify(this.state.homo6));
        let homo9 = JSON.parse(JSON.stringify(this.state.homo9));
        let homo12 = JSON.parse(JSON.stringify(this.state.homo12));
        let subject1 = JSON.parse(JSON.stringify(this.state.subjectUAEHFirst));
        let subject2 = JSON.parse(JSON.stringify(this.state.subjectUAEHSecond));
        let subject3 = JSON.parse(JSON.stringify(this.state.subjectUAEHThird));
        let subject4 = JSON.parse(JSON.stringify(this.state.subjectUAEHForth));
        let subjects = [subject1,subject2, subject3, subject4];
        let subjectsToUpdate = subjects.map( subject => {
            return SubjectApi.updateSubjectToCourse(subject)
        });
        let homos = [homo3,homo6,homo9,homo12];
        let homosToUpdate = homos.map( homo => {
            homo.academic_program = this.state.optionThree.academicProgram;
            homo.college = this.state.optionThree.college;
            return HomolaacionApi.updateHomologacion(homo)
        });
        Promise.all(subjectsToUpdate)
            .then(subjects => {
                console.log(subjects);
                Promise.all(homosToUpdate)
                    .then(values => {
                        console.log(values);
                        this.props.getSubjectsToCourse();
                        toastr.success("Materias actualizadas");
                    }).catch( e => {
                    toastr.error("Oops algo salió mal");
                    console.log(e)
                });// End promise All homos to update
            }).catch(e => {
            toastr.error("Oops algo salió mal");
        });// End promise All subjects
    };

    render() {
        const {colleges, fetched} = this.props;
        const {subjectUAEHFirst, subjectUAEHSecond, subjectUAEHThird,subjectUAEHForth, homo1,homo2,homo3,homo4,homo5, homo6, homo7, homo8, homo9, homo10, homo11, homo12, optionOne, optionTwo, optionThree} = this.state;
        return (
            <Fragment>
                {!fetched ? <MainLoader/> :
                    <div className="Main-takepart">
                        <Paper className="Main-form-tp" zDepth={3}>
                            <Tabs>
                                <Tab label="1ra opción">
                                    <form onSubmit={this.handleSubmit1} className="Tab-style">
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
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo1"}
                                            homo={homo1}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHSecond}
                                            index={2}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo4"}
                                            homo={homo4}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHThird}
                                            index={3}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo7"}
                                            homo={homo7}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo10"}
                                            homo={homo10}
                                        />
                                        <Title>Primera opción</Title>
                                        <SubmitButton/>
                                    </form>
                                </Tab>
                                <Tab label="2da opción">
                                    <form onSubmit={this.handleSubmit2} className="Tab-style">
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
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo2"}
                                            homo={homo2}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHSecond}
                                            index={2}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo5"}
                                            homo={homo5}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHThird}
                                            index={3}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo8"}
                                            homo={homo8}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo11"}
                                            homo={homo11}
                                        />
                                        <SubmitButton/>
                                    </form>
                                </Tab>
                                <Tab label="3ra opción">
                                    <form onSubmit={this.handleSubmit3} className="Tab-style">
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
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo3"}
                                            homo={homo3}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHSecond}
                                            index={2}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo6"}
                                            homo={homo6}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHThird}
                                            index={3}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo9"}
                                            homo={homo9}
                                        />
                                        <SubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo12"}
                                            homo={homo12}
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

TakePartPage = connect(mapStateToProps, {getSubjectsToCourse})(TakePartPage);
export default TakePartPage;