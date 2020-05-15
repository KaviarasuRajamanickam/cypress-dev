import React, { Component } from 'react';
import PostForm from './posts/PostForm';
import AllPost from './posts/AllPost';
import {createStore} from 'redux';
import postReducer from './posts/postReducer.js';
import {Provider} from 'react-redux';

const store = createStore(postReducer);

class Example4 extends Component {
    render() {
        return ( 
            <div className="Example4">
                <Provider store={store}>
                    <PostForm/>
                    <AllPost/>
                </Provider>            
            </div>
        )
    }
}

export default Example4;