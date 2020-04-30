import React, {Component} from 'react';
import {connect} from 'react-redux';
import UpdateStudent from './UpdateStudent';

class StudentRecords extends Component {
    render(){
        return (
            <div className="records section">
                {console.table(this.props.records)}
                <table>
                    <thead>
                        <tr>
                            <th style={{width: 30+'%'}}>Name</th>
                            <th style={{width: 15+'%'}}>Class</th>
                            <th style={{width: 15+'%'}}>Section</th>
                            <th style={{width: 15+'%'}}>Gender</th>
                            <th style={{width: 25+'%'}}>Action</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.records.length ? this.props.records.map((record, index) => (
                            <tr key={index}>
                                {<UpdateStudent record={record}/>}
                            </tr>
                        )) : <tr><td className="no-record" colSpan="5">No record found</td></tr>}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        records : state
    }
}

export default connect(mapStateToProps)(StudentRecords);