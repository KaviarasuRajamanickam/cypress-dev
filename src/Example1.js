import React, {Component} from 'react';

class Example1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            maxChar : 15,
            inputName: ''
        }
    }

    handleChange = (e) => {
        let target = e.target.value
        this.setState({maxChar : 15 - target.length, inputName : target})
    }

    render(){
        return (
            <div className="section charInputForm">
                <h2>Testing Text Input</h2>
                <label>
                    <input onChange={this.handleChange} maxLength="15" type="text" data-cy="charInput" value={this.state.inputName}/>
                    <span data-cy="charCount">You have <em>{this.state.maxChar}</em> characters left</span>
                </label>
            </div>
        )
    }
}

export default Example1;