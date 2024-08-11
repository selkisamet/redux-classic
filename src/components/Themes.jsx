import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";


const Themes = () => {
    const theme = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    return (
        <div style={theme}>
            <button onClick={() => dispatch(Actions.themeAction.light())}>Açık Tema</button>
            <button onClick={() => dispatch(Actions.themeAction.dark())}>Koyu Tema</button>
        </div>
    )
}

export default Themes;