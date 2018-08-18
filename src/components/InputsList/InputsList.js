// import React from 'react';
// import Input from './Input/Input';
// import './InputsList.css';

// const inputsList = ({data, remove, addSub, changeInp}) => {
//     const typesValues = data.map((cur) => {
//         return <Input input={cur} key={cur.id} remove={remove} addSub={addSub} changeInp={changeInp} />
//     })
//     return (
//         <div className="inputList">
//         {typesValues}
//         </div>
//     );
// }

// export default inputsList;

import React, { Component } from 'react';
import Input from './Input/Input';
import './InputsList.css';
import uuid from 'uuid';

const newInput = {
    questionLabel: 'Question',
    typeLabel: 'Type',
    conditionLabel: 'Condition',
    types: [
        {value:'', name: ''},
        {value: 'Text', name: 'Text'},
        {value: 'Number', name: 'Number'},
        {value: 'YesNo ', name: 'Yes / No'}
    ],
    isSubIn: false
  }

class InputsList extends Component  {
    state = {
        input: [{
          id: uuid.v4(),
        questionLabel: 'Question',
        typeLabel: 'Type',
        conditionLabel: 'Condition',
        types: [
            {value:'', name: ''},
            {value: 'Text', name: 'Text'},
            {value: 'Number', name: 'Number'},
            {value: 'Yes / No ', name: 'Yes / No'}
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
        isSubIn: false
      }
    ]}

    addInput = () => {
     const normalInput = {
        ...this.state.input,
        id: uuid.v4()
    };
    const input = [...this.state.input, normalInput];
    this.setState({input});
}
    deleteInputHandler = id => {
     const remainder = this.state.input.filter(cur => cur.id !== id);
     this.setState({input: remainder});
}
    addSubIn = () => {
        const conditionInput = {
        ...newInput,
         id: uuid.v4(),
        conditions: [
        { value : 'Equals', name: 'Equals'},
        { value: 'Greater than', name: 'Greater than'},
        { value: 'Less than', name: 'Less than'}
        ],
        radio: [
        { value: 'Yes', name: 'Yes'},
        { value: 'No', name: 'No'}
        ],
        isSubIn: true
    };
    const input = [...this.state.input, conditionInput];
     this.setState({input});
}
    render() {
        const test = this.state.input.map((cur, index) => {
            return <Input
            key={index}
            id={cur.id}
            questionLabel={cur.questionLabel}
            typeLabel={cur.typeLabel}
            conditionLabel={cur.conditionLabel}
            conditions={cur.conditions}
            radio={cur.radio}
            types={cur.types}
            addSub={this.addSubIn}
            remove={this.deleteInputHandler}
            isSubIn={cur.isSubIn}
            />
        })
        return (
            <div>
                {test}
                <button data-type="input" onClick={this.addInput}>Add Input</button>
            </div>
        );
    }
}

export default InputsList;