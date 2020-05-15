import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        if(title === '' || message === ''){
            this.setState({error: true})
        } else {
            this.props.dispatch({
                type: 'ADD_POST',
                data
            })
            this.getTitle.value = '';
            this.getMessage.value = '';
            this.setState({error: false})
        }
    }

    render(){
        return(
            <div className="add-new-post section">
                <h2>Add new post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <input data-cy="post-title" type="text" ref={(input) => this.getTitle = input} placeholder="Title"/><br/>
                    </div>
                    <div className="form-input">
                        <textarea data-cy="post-desc" rows="5" cols="20" ref={(input) => this.getMessage = input} placeholder="Description"></textarea><br/>
                    </div>
                    {this.state.error && (
                        <span data-cy="post-error" className="error">All fields are mandatory</span>
                    )}
                    <div className="form-input">
                        <button data-cy="add-post" className="btn btn-default">Add Post</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)