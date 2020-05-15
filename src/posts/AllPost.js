import React, {Component} from 'react';
import Post from './post.js'
import EditComponent from './EditComponent.js'

import {connect} from 'react-redux';

class AllPost extends Component {
    render(){
        return(
            <div className="all-posts section">
                <h2>All Post(s)</h2>
                {console.table(this.props.posts)}
                {this.props.posts.map((post, index) => (
                    <div key={post.id} className="postWrapper">
                        {post.editing ? <EditComponent key={post.id} post={post}/> : <Post key={post.id} post={post}/>}
                        {post.editing && <Post key={index} post={post}/>}
                    </div>
                ))}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);