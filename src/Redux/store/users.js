import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserFromServer = createAsyncThunk(
  "users/getUserFromServer",
  async (url) => {

    return fetch(url)
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
        
         state.push(...action.payload.users)
        //   console.log(state, "state2");
        });
      }
    
  });

  export default slice.reducer;
  