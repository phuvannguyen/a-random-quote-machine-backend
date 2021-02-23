import {CHANGE, RECEIVING, ERROR, SUCCESS} from "./action.js"

const initialState = {
    pending: false,
    content: [],
    error: null
}


const reducer = (state= initialState, action) => {
    switch(action.type) {
        case CHANGE:
            const numRandom = Math.floor(Math.random() * state.content.length);            
            return {...state, content: [...state.content.slice(numRandom), ...state.content.slice(0, numRandom)]};
            break;
        case RECEIVING:
            return {...state, pending: true};
            break;
        case SUCCESS:
            return {
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
