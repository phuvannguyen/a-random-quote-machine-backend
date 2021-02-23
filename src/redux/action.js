
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

