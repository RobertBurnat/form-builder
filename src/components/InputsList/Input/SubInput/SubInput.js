import React from 'react';
import './SubInput.css';
import Aux from '../../../../hoc/Auxiliary';

const subInput = ({props, remove, addSubInput, typeInput}) => {
     let inputType = null;

    switch(typeInput) {
        case ('Text'):
        inputType = <input type="text" className="inputSwitch" />
            break;
        case ('Number'):
        inputType = <input type="number" className="inputSwitch" />
            break;
        case ('Yes / No'):
            inputType = (
                <Aux>
            <select name="type" className="inputSwitchY">
                {props.radio.map((currency, key) => {
                    return <option key={key} value={currency.value}>{currency.name}</option>
                })}
            </select>
            </Aux>)
            break;
        default: typeInput = null;
    }

    return(
        <div className="subContentInput">
            <div>
            <label className="conditionLabel">{props.conditionLabel}</label>
            <select name="type" className="select">
                {props.conditions.map((currency, key) => {
                    return <option key={key} value={currency.value}>{currency.name}</option>
            })}
            </select>
                {inputType}
            </div>
            <label className="question">{props.questionLabel}
            <input type="text" className="questionInput" /></label>
            <label>{props.typeLabel}
            <select name="type" className="typesInput">
                {props.types.map((currency, key) => {
                return <option key={key} value={currency.value}>{currency.name}</option>
                })}
            </select></label>
            <div className="Buttons">
                <button className="add" onClick={addSubInput}>Add Sub-Input</button>
                <button className="delete" onClick={() => remove(props.id)}>Delete</button>
            </div>
        </div>
    );
}

export default subInput;