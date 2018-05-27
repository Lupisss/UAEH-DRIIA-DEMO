import React, {Component, Fragment} from 'react';
import '../takepart/TakePartStylesheet.css';
import {IconButton, Paper, RaisedButton, Tab, Tabs} from 'material-ui';
import {PuOptions} from "./PuOptions";
import {PuSubjectToStudy} from "./PuSubjectToStudy";
import {MainLoader} from '../loader/Loader';
import Icon from 'material-ui/svg-icons/navigation/arrow-back';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

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

class PuTakePartPage extends Component {
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

    render() {
        const {colleges, fetched} = this.props;
        const {subjectUAEHFirst, subjectUAEHSecond, subjectUAEHThird,subjectUAEHForth, homo1,homo2,homo3,homo4,homo5, homo6, homo7, homo8, homo9, homo10, homo11, homo12, optionOne, optionTwo, optionThree} = this.state;
        return (
            <Fragment>
                {!fetched ? <MainLoader/> :
                    <div className="Main-takepart">
                        {/*<IconButton*/}
                            {/*containerElement={<Link to={`/public/${this.props.match.params.id}`}/>}*/}
                            {/*tooltip={"Regresar a perfil público"}*/}
                            {/*style={{position: 'absolute', top: 10, left: 10, width:96, height: 96, padding:24}}*/}
                            {/*iconStyle={{width:48,height:48}}*/}
                        {/*>*/}
                            {/*<Icon/>*/}
                        {/*</IconButton>*/}
                        <Paper className="Main-form-tp" zDepth={3}>
                            <Tabs>
                                <Tab label="1ra opción">
                                    <form onSubmit={this.handleSubmit1} className="Tab-style">
                                        {/*<h2 style={{marginLeft:50}}><small>Universidades Destino <span style={{color:'gray'}}><small>Selecciona tus opciones</small></span></small></h2>*/}
                                        <PuOptions
                                            handleCollegeOptionChange={this.handleCollegeOptionChange}
                                            handleOptionChange={this.handleOptionChange}
                                            index={"1ra"}
                                            dataSource={colleges}
                                            option={optionOne}
                                            optionName={"optionOne"}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHFirst}
                                            index={1}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo1"}
                                            homo={homo1}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHSecond}
                                            index={2}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo4"}
                                            homo={homo4}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHThird}
                                            index={3}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo7"}
                                            homo={homo7}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo10"}
                                            homo={homo10}
                                        />
                                        <Title>Primera opción</Title>
                                        <BackButton profileId={this.props.match.params.id}/>
                                    </form>
                                </Tab>
                                <Tab label="2da opción">
                                    <form onSubmit={this.handleSubmit2} className="Tab-style">
                                        <Title>Segunda opción</Title>
                                        <PuOptions
                                            handleOptionChange={this.handleOptionChange}
                                            handleCollegeOptionChange={this.handleCollegeOptionChange}
                                            index={"2da"}
                                            dataSource={colleges}
                                            option={optionTwo}
                                            optionName={"optionTwo"}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHFirst}
                                            index={1}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo2"}
                                            homo={homo2}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHSecond}
                                            index={2}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo5"}
                                            homo={homo5}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHThird}
                                            index={3}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo8"}
                                            homo={homo8}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo11"}
                                            homo={homo11}
                                        />
                                        <BackButton profileId={this.props.match.params.id}/>
                                    </form>
                                </Tab>
                                <Tab label="3ra opción">
                                    <form onSubmit={this.handleSubmit3} className="Tab-style">
                                        <Title>Tercera opción</Title>
                                        <PuOptions
                                            handleOptionChange={this.handleOptionChange}
                                            handleCollegeOptionChange={this.handleCollegeOptionChange}
                                            index={"3ra"}
                                            dataSource={colleges}
                                            option={optionThree}
                                            optionName={"optionThree"}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHFirst}
                                            index={1}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo3"}
                                            homo={homo3}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHSecond}
                                            index={2}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo6"}
                                            homo={homo6}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHThird}
                                            index={3}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo9"}
                                            homo={homo9}
                                        />
                                        <PuSubjectToStudy
                                            subjectUAEH={subjectUAEHForth}
                                            index={4}
                                            onChange={this.handleChange}
                                            handleHomoChange={this.handleHomoChange}
                                            homoName={"homo12"}
                                            homo={homo12}
                                        />
                                        <BackButton profileId={this.props.match.params.id}/>
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

const BackButton = ({...props,profileId}) => (
    <RaisedButton
        className={"submitButton"}
        primary
        label={"Regresar al perfil"}
        containerElement={<Link to={`/public/${profileId}`}/>}
    />
);

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    let profile = { subjectsToCourse: [] };
    if (state.profiles.areFetched) {
        profile = state.profiles.list.filter(profile => profile.id == id)[0];
    }
    console.log(JSON.stringify(profile));
    return {
        colleges: state.colleges.list,
        subjectsToCourse: profile.subjectsToCourse,
        fetched: state.profiles.areFetched
    }
};

PuTakePartPage = connect(mapStateToProps, {})(PuTakePartPage);
export default PuTakePartPage;