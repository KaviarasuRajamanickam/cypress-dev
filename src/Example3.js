import React, { Component } from 'react';
import StudentForm from './studentForm/StudentForm';
import StudentRecords from './studentForm/StudentRecords';
import {createStore} from 'redux';
import studentReducer from './studentForm/studentReducer.js';
import {Provider} from 'react-redux';

const store = createStore(studentReducer);

class Example3 extends Component {
    render() {
        return ( 
            <div className="Example3">
                <Provider store={store}>
                    <StudentForm/>
                    <StudentRecords/>
                </Provider>            
            </div>
        )
    }
}

export default Example3;