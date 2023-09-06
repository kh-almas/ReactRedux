import {createSlice} from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        reducers: {}
    }
})

export default CounterSlice.reducer;