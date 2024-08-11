import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";

const Counter = () => {
    const count = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(Actions.countAction.increment(1))}>Arttır (+)</button>
            <button onClick={() => dispatch(Actions.countAction.decrement(1))}>Azalt (-)</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter;