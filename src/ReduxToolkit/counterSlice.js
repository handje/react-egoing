import { createSlice } from "@reduxjs/toolkit";

// const reducer = (state, action) => {
//   if (action.type === "UP") {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// };
// const initialState = { value: 0 };
// const store = createStore(reducer, initialState);
//아래 코드와 같은 의미
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
