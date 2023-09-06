import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {
    const {value} = useSelector((state) => state.counter) // 'value' comes from 'CounterSlice's initialState. 'state.counter' here counter comes from store.js reducer.
    // console.log(value);
    return (
        <div>
            <button>Increment</button>
            <div>{value}</div>
            <button>Decrement</button>
        </div>
    );
};

export default Counter;