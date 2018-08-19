import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import SubInput from './SubInput/SubInput'
import uuid from 'uuid'
import './Input.css'

class Input extends Component {
    state = {
        type: '',
}
    onChangeType = e => {
        const newState = {
            ...this.state.type
        }
        this.setState({type: e.target.value})
    }
    render() {
        const test = this.props.subInput.map((cur, index) =>{
            return <SubInput
            props={cur} 
            key={index} 
            remove={this.props.removeSub} 
            addSubInput={this.props.addSubInput} />
        })
        return(
            <Aux>
                <div className="normInput">
                    <div className="contentInput">
                        <label className="question">{this.props.questionLabel}
                        <input type="text" className="inputQuest"/></label>
                        <label className="type">{this.props.typeLabel}
                        <select name="type" className="inputType" onChange={this.onChangeType}>
                            {this.props.types.map((currency, key) => {
                            return <option key={key} value={currency.value}>{currency.name}</option>
                        })}
                        </select></label>
                            <div className="Buttons">
                                <button className="add" onClick={this.props.addSubInput}>Add Sub-Input</button>
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