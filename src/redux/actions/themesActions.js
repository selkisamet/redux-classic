import ActionTypes from "../actionTypes";

const light = (value) => {
    return {
        type: ActionTypes.theme.LIGHT, payload: value
    };
}

const dark = (value) => {
    return {
        type: ActionTypes.theme.DARK, payload: value
    };
}

const themeAction = { light, dark };
export default themeAction;