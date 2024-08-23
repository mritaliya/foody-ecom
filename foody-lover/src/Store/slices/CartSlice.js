import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const found = state.findIndex((item) => item.id == action.payload.id);
  
    

      if (found>=0) {
       return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }else{
        state.push(action.payload);
      }
      
    },
    remove(state, action) {
      return (state = state.filter((item) => item.id != action.payload)); // ======> this state is come from initialState
    },
    increment(state,action){
    return state.map((item) =>
       item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrement(state,action){
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    }
  },
});

export const { add, remove,increment,decrement } = cartSlice.actions;
export default cartSlice.reducer;
