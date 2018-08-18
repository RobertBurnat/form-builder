import React from 'react';

const subInput = (props, remove) => {
    let typeInput = null;

    switch(props.typeInput) {
        case ('Text'):
            typeInput = <input type="text" />
            break;
        case ('Number'):
            typeInput = <input type="number" />
            break;
        case ('Yes / No'):
            typeInput = (
                <div>
            <select name="type">
                {props.radio.map((currency, key) => {
                    return <option key={key} value={currency.value}>{currency.name}</option>
                })}
            </select>
            </div>)
            break;
        default: typeInput = null;
    }

    return(
        <div className="contentInput">
            <label>{props.conditionLabel}</label>
            <select name="type">
                {props.conditions.map((currency, key) => {
                    return <option key={key} value={currency.value}>{currency.name}</option>
            })}
            </select>
                {typeInput}
            <label className="question">{props.questionLabel}
            <input type="text" className="test" /></label>
            <label>{props.typeLabel}
            <select name="type" className="test">
                {props.types.map((currency, key) => {
                return <option key={key} value={currency.value}>{currency.name}</option>
                })}
            </select></label>
            <div className="Buttons">
                <button className="singleButton" onClick={props.addSubIn}>Add Sub-Input</button>
                <button onClick={props.remove}>Delete</button>
            </div>
        </div>
    );
}

export default subInput;