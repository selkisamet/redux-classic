import ActionTypes from "../actionTypes";

const initialState = { backgroundColor: "red", height: "500px", width: "100%" };
const lightTheme = { backgroundColor: "white", height: "500px", width: "100%" };
const darkTheme = { backgroundColor: "black", height: "500px", width: "100%" };

const themeReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.theme.LIGHT:
            return lightTheme;

        case ActionTypes.theme.DARK:
            return darkTheme;

        default:
            return state;
    }
}

export default themeReducers;