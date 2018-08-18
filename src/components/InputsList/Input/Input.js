import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import SubInput from './SubInput/SubInput'
import uuid from 'uuid'
import './Input.css'

class Input extends Component {
    state = {
        subInput: [],
        type: ''
}
    
    addSubInput = () => {
        const conditionInput = {
            id: uuid.v4(),
            questionLabel: 'Question',
            typeLabel: 'Type',
            conditionLabel: 'Condition',
            types: [
              {value: '', name: ''},
              {value: 'Text', name: 'Text'},
              {value: 'Number', name: 'Number'},
              {value: 'YesNo ', name: 'YesNo'}
            ],
            conditions: [
              { value : 'Equals', name: 'Equals'},
              { value: 'Greater than', name: 'Greater than'},
              { value: 'Less than', name: 'Less than'}
            ],
            radio: [
              { value: 'Yes', name: 'Yes'},
              { value: 'No', name: 'No'}
            ],
        };
        const subInput = [...this.state.subInput, conditionInput];
         this.setState({subInput});
    }

    onChangeType = e => {
        const newState = {
            ...this.state.type
        }
        this.setState({type: e.target.value})
        console.log(e.target.value)
    }

    removeHandler = index => {
        const subInput = [...this.state.subInput]
        subInput.splice(index, 1);
        this.setState({subInput: subInput});
    }

    render() {
        const test = this.state.subInput.map((cur, index) =>{
            return <SubInput
                key={index}
                id={cur.id}
                questionLabel={cur.questionLabel}
                typeLabel={cur.typeLabel}
                conditionLabel={cur.conditionLabel}
                types={cur.types}
                conditions={cur.conditions}
                radio={cur.radio}
                typeInput={this.state.type}
                addSubIn={this.addSubInput}
                remove={this.removeHandler}
                />
        })
        return(
            <Aux>
                <div className="normInput">
                    <div className="contentInput">
                        <label className="question">{this.props.questionLabel}
                        <input type="text" className="inputQuest" onChange={this.props.changed} /></label>
                        <label className="type">{this.props.typeLabel}
                        <select name="type" className="inputType" onChange={this.onChangeType}>
                            {this.props.types.map((currency, key) => {
                            return <option key={key} value={currency.value}>{currency.name}</option>
                        })}
                        </select></label>
                            <div className="Buttons">
                                <button className="add" onClick={this.addSubInput}>Add Sub-Input</button>
                                <button className="delete" onClick={e => this.props.remove(this.props.id)}>Delete</button>
                            </div>
                        </div>
                </div>
                <Aux>
                {test}
                </Aux>
            </Aux>
        )
    }
}


export default Input;