import React from 'react';
import './SubInput.css';
import Aux from '../../../../hoc/Auxiliary';

const subInput = (props, remove) => {
    let typeInput = null;

    switch(props.typeInput) {
        case ('Text'):
            typeInput = <input type="text" className="inputSwitch" />
            break;
        case ('Number'):
            typeInput = <input type="number" className="inputSwitch" />
            break;
        case ('Yes / No'):
            typeInput = (
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
            <label class="conditionLabel">{props.conditionLabel}</label>
            <select name="type" className="select">
                {props.conditions.map((currency, key) => {
                    return <option key={key} value={currency.value}>{currency.name}</option>
            })}
            </select>
                {typeInput}
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
                <button className="add" onClick={props.addSubIn}>Add Sub-Input</button>
                <button className="delete" onClick={props.remove}>Delete</button>
            </div>
        </div>
    );
}

export default subInput;