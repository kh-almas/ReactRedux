import {createSlice} from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 10,
        },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByValue: (state, action) => {
            state.value = state.value + action.payload;
        },
        decrementByValue: (state, action) => {
            state.value = state.value - action.payload;
        }
    }
})

export const { increment, decrement, incrementByValue, decrementByValue } = CounterSlice.actions;

export default CounterSlice.reducer;