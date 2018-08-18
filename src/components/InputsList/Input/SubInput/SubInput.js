import React from 'react';

const subInput = props => {
    let typeInput = null;

    switch(props.typeInput) {
        case ('Text'):
            typeInput = <input type="text" />
            break;
        case ('Number'):
            typeInput = <input type="number" />
            break;
        case ('Yes / No'):
            typeInput = 
            <select name="test">
                {props.radio.map((currency, key) => {
                    return <option key={key} value={currency.value}>{currency.name}</option>
                })}
            </select>
            break;

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
                <button className="singleButton" onClick={props.addSub}>Add Sub-Input</button>
                <button onClick={e => props.remove(props.id)}>Delete</button>
            </div>
        </div>
    );
}

export default subInput;