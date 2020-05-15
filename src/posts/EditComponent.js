import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: false
        }
    }
    handleEdit = (e) => {
        e.preventDefault();
        const newtitle = this.getTitle.value;
        const newmessage = this.getMessage.value;
        const data = {
            newtitle,
            newmessage
        }
        if(newtitle === '' || newmessage === ''){
            this.setState({error: !this.state.error})
        } else {
            this.props.dispatch({
                type: 'UPDATE',
                id: this.props.post.id,
                data: data
            })
        }
        
    }
    handleCancel = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'CANCEL_POST'
        })
    }

    render(){
        return(
            <div className="modal">
                <div className="modal-dialogue">
                    <h3>Edit Post</h3>
                    <form>
                        <div className="form-input">
                            <input data-cy="edit-title" type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter post title"/>
                        </div>
                        <div className="form-input">
                            <textarea data-cy="edit-desc" rows="5" cols="20" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} placeholder="Enter post details"></textarea>
                        </div>
                        <div className="form-input">
                            <button data-cy="update-post" className="btn btn-default" onClick={this.handleEdit}>Update</button>
                            <button data-cy="cancel-post" className="btn btn-link" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </form>
                    {this.state.error && (
                        <span className="error">All fields are mandatory</span>
                    )}
                </div>
                <div className="overlay"></div>
            </div>            
        )
    }

}

export default connect()(EditComponent)