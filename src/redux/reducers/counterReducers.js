import ActionTypes from "../actionTypes";

const initialState = 0;

const counterReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.count.INCREMENT:
            return state + action.payload;

        case ActionTypes.count.DECREMENT:
            const newValue = state - action.payload;
            return newValue < 0 ? 0 : newValue;

        default:
            return state;
    }
}

export default counterReducers;