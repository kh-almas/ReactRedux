import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementByValue, increment, incrementByValue} from "../Redux/Features/Counter/CounterSlice";

const Counter = () => {
    const {value} = useSelector((state) => state.counter) // 'value' comes from 'CounterSlice's initialState. 'state.counter' here counter comes from store.js reducer.
    // console.log(value);
    const dispatch = useDispatch();
    return (
        <div>
            {/*need to use function for increment and decrement otherwise it dosent work and dosent give any error*/}
            <button onClick={() => dispatch(incrementByValue(10))}>Increment by 10</button>
            <br/>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <div>{value}</div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br/>
            <button onClick={() => dispatch(decrementByValue(10))}>Increment by 10</button>
        </div>
    );
};

export default Counter;