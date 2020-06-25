import React, {Component} from 'react';

class Example5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            result: '',
            error: false
        }
    }

    handleChange = (e) => {
        let target = e.target.value
        this.setState({inputValue : target})
    }

    clear = () => {
        this.setState({
            result: '',
            inputValue: '',
            error: false
        })
    }

    removeExtraSpace = () => {
        if(this.state.inputValue === ''){
            this.setState({
                result: 'The value should not be empty',
                error: true
            })
        } else {
            this.setState({
                result: this.state.inputValue.replace(/\s+/g,' ').trim(),
                error: false
            })
        }
    }

    checkPalindrome = () => {
        if(this.state.inputValue === ''){
            this.setState({
                result: 'The value should not be empty',
                error: true
            })
        } else {
            if(this.state.inputValue === this.reverseString(this.state.inputValue)) {
                this.setState({
                    result: '"'+this.state.inputValue +'" is a palindrome',
                    error: false
                })
            } else {
                this.setState({
                    result: '"'+this.state.inputValue +'" is not a palindrome',
                    error: true
                })
            }
        }        
    }

    reverseString = (str) => {
        return (str === '') ? '' : this.reverseString(str.substr(1)) + str.charAt(0);
    }

    render(){
        return (
            <div className="section charInputForm checkString">
                <h2>Enter a string</h2>
                <label>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange} data-cy="checkInput"/>
                    <button className="btn btn-link" onClick={this.clear}>Clear</button>
                </label>
                <button data-cy="removeWhitespace" className="btn btn-default" onClick={this.removeExtraSpace} style={{'marginRight': '15px'}}>Remove Whitespace</button>
                <button data-cy="checkPalindrome" className="btn btn-default" onClick={this.checkPalindrome}>Check Palindrome or not</button>
                <div id="output" data-cy="output" className={this.state.error === true ? 'error' : 'success'}>{this.state.result}</div>
            </div>
        )
    }
}

export default Example5;