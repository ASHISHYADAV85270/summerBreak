import { createSlice } from "@reduxjs/toolkit";
//slice contain fucntion which have connections
const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      // const datajoaaya = action.payload;
      const initaldata = state;
      console.log("initaldata", initaldata);
      // console.log("datajoaaya", datajoaaya);
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      console.log("action.payload");
      return [];
    },
  },
});
export default UserSlice.reducer;
export const { addUser, removeUser, deleteUsers } = UserSlice.actions;
