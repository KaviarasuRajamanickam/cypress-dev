import React, { Component } from 'react';

class Example2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectanother: false,
            clicked: -1,
            clickedValue: 'Nothing Selected',
            options: ['Option one', 'Option two', 'Option three', 'Option four'],
            checkboxSelected: 0,
            radioValue: 'Nothing Selected',
            selectedValue: 'Nothing Selected',
            mouseover: -1,
            mouseoverValue: 'Nothing Selected'
        }
    }

    handleSelect = (e) => {
        let target = e.target.value
        target === 'Option two' ? this.setState({ selectanother: true }) : this.setState({ selectanother: false })
        target === '' ? this.setState({ selectedValue: 'Nothing Selected' }) : this.setState({ selectedValue: target })
    }
    handleClick = (e, i) => {
        this.setState({
            clicked: i,
            clickedValue: this.state.options[i]
        })
    }
    handleRadio = (e, i) => {
        this.setState({
            radioValue: this.state.options[i]
        })
    }
    handleCheck = (e) => {
        this.setState({
            checkboxSelected: document.querySelectorAll('input[name=testCheckbox]:checked').length
        })
    }
    handleMouseover = (e, i) => {
        this.setState({
            mouseover: i,
            mouseoverValue: this.state.options[i]
        })
    }


    render() {
        const options = ['Option one', 'Option two', 'Option three', 'Option four'];
        return (
            <div>
                <div className="section underlinedList">
                    <h2>Click</h2>
                    <span className="selectedItem">Selected Item: <span id="click-value" data-cy="click-value">{this.state.clickedValue}</span></span>
                    <ul className="click" data-cy="clickedList">
                        {
                            options.map((option, i) => (
                                <li className={this.state.clicked === i ? 'clicked' : ''} id={option.replace(/ /g, '') + 'click'} onClick={(e) => this.handleClick(e, i)} key={i}>{option}</li>
                            ))
                        }
                    </ul>
                </div>


                <div className="section checkRadio">
                    <h2>Checkbox & Radio buttons</h2>
                    <span className="selectedItem"><span id="check-value" data-cy="check-value">{this.state.checkboxSelected}</span> Checkbox(es) selected</span>
                    <span className="selectedItem">Selected radio: <span id="radio-value" data-cy="radio-value">{this.state.radioValue}</span></span>
                    <ul data-cy="checkboxList">
                        {
                            options.map((option, i) => (
                                <li key={i}>
                                    <label>
                                        <input onClick={this.handleCheck} type="checkbox" id={i.toString()} name="testCheckbox" />
                                        {option}
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                    <ul data-cy="radioboxList">
                        {
                            options.map((option, i) => (
                                <li key={i}>
                                    <label>
                                        <input onClick={(e) => this.handleRadio(e, i)} type="radio" id={i.toString()} name="testRadio" />
                                        {option}
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="section">
                    <h2>Select Dropdown</h2>
                    <span className="selectedItem">Selected Item: <span id="select-value" data-cy="select-value">{this.state.selectedValue}</span></span>

                    <select onChange={this.handleSelect} data-cy="selectDropdown">
                        <option value=''>Please select</option>
                        {
                            options.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                            ))
                        }
                    </select>

                    <select data-cy="selectDropdownDisabled" disabled={this.state.selectanother ? false : true}>
                        <option selected={this.state.selectanother ? false : true}>Please select</option>
                        {
                            options.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                            ))
                        }
                    </select>
                </div>


                <div className="section underlinedList">
                    <h2>Trigger(Mouseover)</h2>
                    <span className="selectedItem">Selected Item: <span id="trigger-value" data-cy="trigger-value">{this.state.mouseoverValue}</span></span>
                    <ul data-cy="mouseOver">
                        {
                            options.map((option, i) => (
                                <li className={this.state.mouseover === i ? 'mouseover' : ''} onMouseOver={(e) => this.handleMouseover(e, i)} key={i}>{option}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

export default Example2;