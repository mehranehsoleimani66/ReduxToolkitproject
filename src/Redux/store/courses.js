
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
console.log(url)
    return fetch(url)
      .then((res) => res.json())
      .then((data) =>(data));
  }
);


const slice = createSlice({
    name: "courses",
    initialState: [],
    reducers: {
     },
      extraReducers: (builder) => {
        builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
        console.log(action,"action")
        console.log(state,"state")
         state.push(...action.payload)
        //   console.log(state, "state2");
        });
      }
    
  });

  export default slice.reducer;
  