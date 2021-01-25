import axios from "axios";

export const CHANGE = "CHANGE";
export const RECEIVING = "RECEIVING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS"

export const actionChange = () => {
    return {
        type: CHANGE

    }
};

export const receivingData = () => {
    return {
        type: RECEIVING
    }
};

export const errData = () => {
    return {
        type: ERROR
    }
}

export const successData = (data) => {
    return {
        type: SUCCESS,
        payload: data

    }
}

const handleAsync = () => {
    return async (dispatch) => {
        const url = "https://quote-random-machine.herokuapp.com/content/quote";
        dispatch(receivingData);
        const {data} = await axios.get(url);
        if (!data) {
            return dispatch(errData)
        } else {
            return dispatch(successData(content.data))
        }
    }
}