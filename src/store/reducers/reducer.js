import * as actionTypes from '../actions';
import uuid from 'uuid';

const initialState = {
    input: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INPUT:
            const normalInput = {
                id: uuid.v4(),
                text: '',
                questionLabel: 'Question',
                typeLabel: 'Type',
                conditionLabel: 'Condition',
                types: [
                    {value: '', name: ''},
                    {value: 'Text', name: 'Text'},
                    {value: 'Number', name: 'Number'},
                    {value: 'Yes / No', name: 'Yes / No'}
                ],
                subInput: []
            }
            return {
                ...state,
                input: [...state.input, normalInput]
            }

        case actionTypes.REMOVE_INPUT:
            const remainder = state.input.filter((cur, index) => cur.id !== action.id);
            return {
                ...state,
                input: remainder
            }

        case actionTypes.ADD_SUBINPUT:
            const conditionInput = {
                id: action.id,
                questionLabel: 'Question',
                typeLabel: 'Type',
                conditionLabel: 'Condition',
                types: [
                  {value: '', name: ''},
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
            }
            const input = state.input.map(cur => {
                if(cur.id === action.id) {
                    cur.subInput = [...cur.subInput, conditionInput];
                }
                return cur;
            });
            return {
                ...state,
                input: input
            }
        case actionTypes.ADD_TEXT:
            const addText = [...state.input];
            addText.map(t => {
                if(t.id === action.id) {
                    t.text = action.text
                }
                return t;
            });
            return {
                ...state,
                input: addText
            }

    }
    return state;
}

export default reducer;