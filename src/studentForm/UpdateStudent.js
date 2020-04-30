import React, {Component} from 'react';
import {connect} from 'react-redux';

class UpdateStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            deleteModalOpen : false,
            openModal: false
        }
    }
    
    handleUpdate = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newClass = this.getClass.value;
        const newSection = this.getSection.value;
        const newGender = this.getGender.value;

        const data = {
            newName,
            newClass,  
            newSection,
            newGender
        }
        this.props.dispatch({
            type: 'UPDATE_STUDENT',
            id: this.props.record.Id,
            data: data
        })
    }
    handleCancel = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'CANCEL_STUDENT'
        })
    }

    handleYes = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type:'DELETE_STUDENT', 
            id: this.props.record.Id
        })        
    }

    handleNo = () => {
        this.setState({
            openModal : false
        })        
    }
    handleCofirmDelete = () => {
        this.setState({
            openModal : true
        })        
    }

    render(){
        return (
            <React.Fragment>
                <td className="name">
                    {this.props.record.editing === true ? <div className="form-input"><input type="text" defaultValue={this.props.record.Name} ref={(input) => this.getName = input} placeholder="Student Name*"/></div> : this.props.record.Name}
                </td>
                <td className="class">
                    {this.props.record.editing === true ? <div className="form-input"><input type="text" defaultValue={this.props.record.Class} ref={(input) => this.getClass = input} placeholder="Student Class*"/></div> : this.props.record.Class}
                </td>
                <td className="section">
                    {this.props.record.editing === true ? <div className="form-input"><select defaultValue={this.props.record.Section} ref={(input) => this.getSection = input}>
                                <option value="" disabled>Select Section*</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select></div> : this.props.record.Section}
                </td>
                <td className="gender">
                    {this.props.record.editing === true ? <div className="form-input"><select defaultValue={this.props.record.Gender} ref={(input) => this.getGender = input}>
                                <option value="" disabled>Select Gender*</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select></div> : this.props.record.Gender}
                </td>
                <td>
                    {this.props.record.editing === true ? 
                        <React.Fragment>
                            <button data-cy="updatebtn" className="btn btn-link" onClick={this.handleCancel}>Cancel</button>
                            <button data-cy="cancelbtn" className="btn btn-default" onClick={this.handleUpdate}>Update</button>
                        </React.Fragment> :
                        <React.Fragment>
                            <button data-cy="deletebtn" className="btn btn-default btn-delete" onClick={this.handleCofirmDelete}>Delete</button>
                            <button data-cy="editbtn" className="btn btn-default" onClick={() => this.props.dispatch({type:'EDIT_STUDENT', id: this.props.record.Id})}>Edit</button>
                        </React.Fragment>
                    }
                </td>

                {this.state.openModal && 
                    <td>
                        <div className="modal">
                            <div className="modal-dialogue">
                                <h2>Are you sure?</h2>
                                <p>Please confirm. do you really want to delete this record</p>
                                    <button data-cy="deleteConfirmbtn" className="btn btn-default" onClick={this.handleYes}>Yes</button>
                                    <button data-cy="deleteCancelbtn" className="btn btn-link" onClick={this.handleNo}>No</button>
                                </div>
                            <div className="overlay"></div>
                        </div>
                    </td>
                }
            </React.Fragment>
        )
    }
}


export default connect()(UpdateStudent);