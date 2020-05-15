import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    handleDelete = (e) => {
        e.preventDefault();
        let result = window.confirm("Are you sure want to delete the post?");
        if (result === true) {
            this.props.dispatch({type: 'DELETE_POST',id: this.props.post.id})
        }
    }
    render(){
        return (
            <div>
                <div className="post">
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.message}</p>
                </div>
                <div className="post_action">
                    <button data-cy="edit-post" className="btn btn-default" onClick={() => this.props.dispatch({type: 'EDIT_POST',id: this.props.post.id})}>Edit</button>
                    <button data-cy="delete-post" className="btn btn-link" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

export default connect()(Post);