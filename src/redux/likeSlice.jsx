import { createSlice } from "@reduxjs/toolkit";
const localValue = localStorage.getItem("liked")
  ? JSON.parse(localStorage.getItem("liked"))
  : [];
const mode = localStorage.getItem("mode")
  ? JSON.parse(localStorage.getItem("mode"))
  : [];
const initialState = {
  value: localValue,
  mode,
  user: null,
};
const html = document.documentElement;
const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    add: (state, action) => {
      const filteredValue = state.value.find((item) => {
        return item.id === action.payload.id;
      });
      if (!filteredValue) {
        state.value.push(action.payload);
      }
      localStorage.setItem("liked", JSON.stringify(state.value));
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => {
        return item.id !== action.payload.id;
      });
      localStorage.setItem("liked", JSON.stringify(state.value));
    },
    dark: (state) => {
      state.mode === "dark"
        ? ((state.mode = "light"),
          document.documentElement.setAttribute("data-theme", "light"))
        : ((state.mode = "dark"),
          document.documentElement.setAttribute("data-theme", "dark"));
      localStorage.setItem("mode", JSON.stringify(state.mode));
    },
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
export const { add, remove, dark, addUser } = likeSlice.actions;
export default likeSlice.reducer;
