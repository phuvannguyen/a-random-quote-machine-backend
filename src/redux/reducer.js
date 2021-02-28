import {CHANGE, RECEIVING, ERROR, SUCCESS} from "./action.js"

const color = [
    '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'

]
const initialState = {
    pending: false,
    content: [],
    error: null,
    colors: color
}


const reducer = (state= initialState, action) => {
    switch(action.type) {
        case CHANGE:
            const numRandom = Math.floor(Math.random() * state.content.length);
            const colorRandom = Math.floor(Math.random() * state.colors.length);            
            return {...state, content: [...state.content.slice(numRandom), ...state.content.slice(0, numRandom)], 
                colors: [...state.colors.slice(colorRandom), ...state.colors.slice(0, colorRandom)]};
            break;
        case RECEIVING:
            return {...state, pending: true};
            break;
        case SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
                content: action.payload,

            }
        case ERROR:
            return {
                ...state,
                error: true

            }

        default:
            return state;
    }
};

export default reducer;
