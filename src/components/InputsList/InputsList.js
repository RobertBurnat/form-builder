import React, { Component } from 'react';
import Input from './Input/Input';
import './InputsList.css';
import uuid from 'uuid';
import { connect } from 'react-redux';

class InputsList extends Component  {
    state = {
        val: '',
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
        const input = this.props.input.map(cur => {
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
            // addSubInput={e => this.addSubInput(cur.id)}
            addSubInput={() => this.props.onAddSubInput(cur.id)}
            remove={() => this.props.onDeleteInput(cur.id)}
            removeSub={this.removeSubHandler}
            />
        })
        return (
            <div className="inputList">
                {input}
                <button style={styles} onClick={this.props.onAddInput}>Add Input</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        input: state.input,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddInput: () => dispatch({type: 'ADD_INPUT'}),
        onAddSubInput: id => dispatch({type: 'ADD_SUBINPUT', id: id}),
        onDeleteInput: id => dispatch({type: 'REMOVE_INPUT', id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputsList);