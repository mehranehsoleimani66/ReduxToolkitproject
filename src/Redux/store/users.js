import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserFromServer = createAsyncThunk(
  "users/getUserFromServer",
  async (url) => {

    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const removeUserFromServer = createAsyncThunk(
  "users/removeUserFromServer",
  async (id) => {

    return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`,{method:"DELETE"})
      .then((res) => res.json())
      .then((data) => data);
  }
);


const slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
     },
      extraReducers: (builder) => {
        builder.addCase(getUserFromServer.fulfilled, (state, action) => {
        console.log(action,"action")
         state.push(...action.payload)
        //   console.log(state, "state2");
        }),
        builder.addCase(removeUserFromServer.fulfilled, (state, action) => {
         const newState = state.filter((user)=>user._id!==action.payload.id)
         return newState
          });
      }
    
  });

  export default slice.reducer;
  