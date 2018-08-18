import React, { Component } from 'react';
import Input from './Input/Input';
import './InputsList.css';
import uuid from 'uuid';

class InputsList extends Component  {
    state = {
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
    };
    const input = [...this.state.input, normalInput];
    this.setState({input});
}
    deleteInputHandler = id => {
     const remainder = this.state.input.filter(cur => cur.id !== id);
     this.setState({input: remainder});
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
            addSub={this.addSubIn}
            remove={this.deleteInputHandler}
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