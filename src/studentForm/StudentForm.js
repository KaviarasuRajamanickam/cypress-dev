import React, {Component} from 'react';
import {connect} from 'react-redux';
import Notification from './notification';

class StudentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInvalid : false,
            classInvalid : false,
            sectionInvalid : false,
            genderInvalid : false,
            recordAdd : false,
            error: false
        }
    }
    handlesubmit = (e) => {
        e.preventDefault();
        const Name = this.getName.value;
        const Class = this.getClass.value;
        const Section = this.getSection.value;
        const Gender = this.getGender.value;
        if(Name !== '' && Class !== '' && Section !== '' && Gender !== '') {            
            const data = {
                Id : new Date(),
                Name,
                Class,  
                Section,
                Gender,
                editing: false
            }
            this.props.dispatch({
                type: 'ADD_STUDENT',
                data
            })
            
            this.getName.value = '';
            this.getClass.value = '';
            this.getSection.value = '';
            this.getGender.value = '';
            this.setState({recordAdd: true})
            this.setState({error: false})
            setTimeout(() => {
                this.setState({recordAdd: false})
            },5000)
        } else {
            this.setState({error: true})
        }        
    }

    handleClear = (e) => {
        e.preventDefault();
        this.setState({
            nameInvalid : false,
            classInvalid : false,
            sectionInvalid : false,
            genderInvalid : false,
            error: false
        })
        this.getName.value = '';
        this.getClass.value = '';
        this.getSection.value = '';
        this.getGender.value = '';
    }

    checkField = (e) => {
        let target = e.target
        if(target.value === ''){
            this.setState({error: true})
            this.checkError(target.name, true)
        } else {
            this.setState({error: false})
            this.checkError(target.name, false)
        }
    }

    checkError = (name, val) => {
        name === 'name' ? this.setState({nameInvalid : val}) : 
        name === 'class' ? this.setState({classInvalid : val}) : 
        name === 'section' ? this.setState({sectionInvalid : val}) : 
        this.setState({genderInvalid : val})
    }

    render(){
        return (
            <React.Fragment>
            <Notification enabled={this.state.recordAdd} message="Record added successfully"/>
            <div className="studentForm section">
                <h2>Add Student</h2>
                <form>
                    <div className={`${this.state.nameInvalid ? 'error' : ''} form-input`}>
                        <input type="text" name="name" onBlur={(e) => this.checkField(e)} ref={(input) => this.getName = input} placeholder="Name*"/>
                    </div>
                    <div className={`${this.state.classInvalid ? 'error' : ''} form-input`}>
                        <input type="text" name="class" onBlur={(e) => this.checkField(e)} ref={(input) => this.getClass = input} placeholder="Class*"/>
                    </div>
                    <div className={`${this.state.sectionInvalid ? 'error' : ''} form-input`}>
                        <select name="section" onChange={(e) => this.checkField(e)} defaultValue={''} ref={(input) => this.getSection = input}>
                            <option value="" disabled>Section*</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div className={`${this.state.genderInvalid ? 'error' : ''} form-input`}>
                        <select name="gender" onChange={(e) => this.checkField(e)} defaultValue={''} ref={(input) => this.getGender = input}>
                            <option value="" disabled>Gender*</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    {this.state.error && <div style={{marginBottom: '10px'}}>
                        <span className="error">Something went wrong.</span>
                    </div>
                    }
                    <div className="form-input text-left">
                        <button data-cy="add-student" className="btn btn-default" onClick={this.handlesubmit}>Add Student</button>
                        <button data-cy="cancel-student" className="btn btn-link" onClick={this.handleClear}>Clear</button>
                    </div>                    
                </form>
            </div>
            </React.Fragment>
        )
    }
}

export default connect()(StudentForm);