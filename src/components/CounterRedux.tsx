import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../redux/count";

const Counter = () => {

    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 style={{color: 'black'}}>{count}</h1>
            <button onClick={() => dispatch(incrementCount())}>Increment</button>
            <button onClick={() => dispatch(decrementCount())}>Decrement</button>
        </div>
    )
}

export default Counter;
