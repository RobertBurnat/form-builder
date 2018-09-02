import React, { Component } from 'react';
import Aux from '../../../hoc/Auixiliary/Auxiliary';
import SubInput from './SubInput/SubInput';
import { connect } from 'react-redux';
import './Input.css';

class Input extends Component {
    state = {
        type: ''
}
    onChangeType = e => {
        this.setState({type: e.target.value})
    }
    render() {
        const text = this.props.input.map(t => {
            if(t.id === this.props.id) {
                return t.text
            }
        });

        const subInput = this.props.subInput.map((cur, index) =>{
            return <SubInput
            props={cur} 
            key={index} 
            remove={this.props.removeSub} 
            addSubInput={this.props.addSubInput}
            typeInput={this.state.type} />
        })
        return(
            <Aux>
                <div className="normInput">
                    <div className="contentInput">
                        <label className="question">{this.props.questionLabel}
                        <input 
                        type="text" 
                        className="inputQuest" 
                        onChange={(event) => this.props.onAddText(event.target.value, this.props.id)} 
                        value={text.join("")}/></label>
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
                    {subInput}
                </Aux>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        input: state.input,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddText: (text, id) => dispatch({type: 'ADD_TEXT', text: text, id: id})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);