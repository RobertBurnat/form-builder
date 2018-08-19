import React, { Component } from 'react';
import Input from './Input/Input';
import './InputsList.css';
import uuid from 'uuid';

class InputsList extends Component  {
    state = {
        val: '',
        input: [],
}
    addInput = () => {
     const normalInput = {
        id: uuid.v4(),
        questionLabel: 'Question',
        typeLabel: 'Type',
        conditionLabel: 'Condition',
        types: [
            {value: '', name: ''},
            {value: 'Text', name: 'Text'},
            {value: 'Number', name: 'Number'},
            {value: 'Yes / No', name: 'Yes / No'}
        ],
        subInput: []
    };
    const input = [...this.state.input, normalInput];
    this.setState({input});
}

addSubInput = inputId => {
    const conditionInput = {
        id: inputId,
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

    const input = this.state.input.map(cur => {
        if(cur.id === inputId) {
            cur.subInput = [...cur.subInput, conditionInput];
        }
        return cur;
    });
    this.setState({ input })
}

    deleteInputHandler = id => {
     const remainder = this.state.input.filter(cur => cur.id !== id);
     this.setState({input: remainder});
}

    removeSubHandler = id => {
        const input = this.state.input.map(cur => {
            if(cur.id === id) {
                cur.subInput.splice(id, 1);
            }
            return cur;
        });
        this.setState({ input })
        
    }
    render() {
        const styles = {
            height: '45px',
            width: '150px',
            marginTop: '25px'
        }
        const test = this.state.input.map(cur => {
            return <Input
            key={uuid.v4()}
            id={cur.id}
            questionLabel={cur.questionLabel}
            typeLabel={cur.typeLabel}
            conditionLabel={cur.conditionLabel}
            conditions={cur.conditions}
            radio={cur.radio}
            types={cur.types}
            subInput={cur.subInput}
            addSubInput={e => this.addSubInput(cur.id)}
            remove={this.deleteInputHandler}
            removeSub={this.removeSubHandler}
            changed={this.onChangedHandler}
            />
        })
        return (
            <div className="inputList">
                {test}
                <button style={styles} onClick={this.addInput}>Add Input</button>
            </div>
        );
    }
}

export default InputsList;