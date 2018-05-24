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

class Option {
    constructor(college = null, country = "", academicProgram = ""){
        this.college = college;
        this.country =  country;
        this.academicProgram = academicProgram;
    }

    toString(){
        return this.college + this.country +  this.academicProgram ;
    }
}

class TakePartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectUAEHFirst : new SubjectUAEH(),
            subjectUAEHSecond : new SubjectUAEH(),
            subjectUAEHThird : new SubjectUAEH(),
            optionOne: new Option(),
            optionTwo: new Option(),
            optionThree: new Option()
        };
    }

    componentWillMount(){

    }

    componentWillReceiveProps(){

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

    handleCollegeOptionChange = name =>  (event, index, value) => {
        let option = JSON.parse(JSON.stringify(this.state[name]));
        option.college = value;
        let college = this.props.colleges.filter(college => college.id == value)[0];
        option.country = college.country;
        this.setState({[name]:option});
    };

    handleOptionChange = name => event => {
        let option = JSON.parse(JSON.stringify(this.state[name]));
        option[event.target.name] = event.target.value;
        this.setState({[name]:option});
    };


    render() {
        const {colleges} = this.props;
        const {subjectUAEHFirst,subjectUAEHSecond,subjectUAEHThird, optionOne, optionTwo, optionThree} = this.state;
        return (
            <div className="Main-takepart">
                <Paper className="Main-form-tp" zDepth={3}>
                    <form style={{textAlign:'left'}}>
                        <Tabs>
                            <Tab label="1ra opción" >
                                <div className="Tab-style">
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
                                    <Title>Primera opción</Title>
                                </div>
                            </Tab>
                            <Tab label="2da opción" >
                                <div className="Tab-style">
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
                                </div>
                            </Tab>
                            <Tab label="3ra opción">
                                <div className="Tab-style">
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
                                </div>
                            </Tab>
                        </Tabs>
                    </form>
                </Paper>
            </div>
        );
    }
}

const Title = (props) => (
    <div style={{width:'100%'}}>
        {/*<h2 style={{width:'50%', textAlign:'center', margin: 'auto', marginBottom: 20}}>{props.children}</h2>*/}
        <p id={"title"}>{props.children}</p>
    </div>
);


const mapStateToProps = (state, ownProps) => {
    return {
        colleges: state.colleges.list,
        fetched: state.colleges.areFetched
    }
};

TakePartPage = connect(mapStateToProps,{})(TakePartPage);
export default TakePartPage;