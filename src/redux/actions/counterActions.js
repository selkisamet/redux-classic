import ActionTypes from "../actionTypes";

const increment = (value = 1) => {
    return {
        type: ActionTypes.count.INCREMENT, payload: value
    };
};

const decrement = (value = 1) => {
    return {
        type: ActionTypes.count.DECREMENT, payload: value
    };
};

const countAction = { increment, decrement };
export default countAction;