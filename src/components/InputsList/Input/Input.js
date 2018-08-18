import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import SubInput from './SubInput/SubInput'
import './Input.css'

class Input extends Component {
    state = {
        type: 'Number'
    }

    onChangeType = e => {
        const newState = {
            ...this.state.type
        }
        this.setState({type: e.target.value})
    }

    render() {
        let test = 
        <Aux>
        <div className="normInput">
            <div className="contentInput">
                <label className="question">{this.props.questionLabel}
                <input type="text" className="test" onChange={this.props.changed} /></label>
                <label>{this.props.typeLabel}
                <select name="type" className="test" onChange={this.onChangeType}>
                    {this.props.types.map((currency, key) => {
                        return <option key={key} value={currency.value}>{currency.name}</option>
                    })}
                </select></label>
                <div className="Buttons">
                    <button className="singleButton" onClick={this.props.addSub}>Add Sub-Input</button>
                    <button onClick={e => this.props.remove(this.props.id)}>Delete</button>
                </div>
            </div>
        </div>
        </Aux>
        if(this.props.isSubIn) {
            test = 
             <Aux>
            <SubInput
                id={this.props.id}
                isSubIn={this.isSubIn}
                conditionLabel={this.props.conditionLabel}
                conditions={this.props.conditions}
                radio={this.props.radio} 
                types={this.props.types}
                questionLabel={this.props.questionLabel}
                typeLabel={this.props.typeLabel}
                remove={this.props.remove}
                addSub={this.props.addSub}
                typeInput={this.state.type}
            />
        </Aux>
        }
        return(
            <div>
                {test}
            </div>
        )
    }
}


export default Input;