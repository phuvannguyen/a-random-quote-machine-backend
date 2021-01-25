import {CHANGE, RECEIVING, ERROR, SUCCESS, actionChange, receivingData, errData, successData} from "./action.js"

const initialState = {
    pending: false,
    content: [],
    error: null
}


const reducer = (state= initialState, action) => {
    switch(action.type) {
        case CHANGE:
            const numRandom = Math.floor(Math.random() * state.length)
            return {...state.slice(numRandom), ...state.slice(0, numRandom)};
            break;
        case RECEIVING:
            return {...state, pending: true};
            break;
        case SUCCESS:
            return {
                ...state,
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
