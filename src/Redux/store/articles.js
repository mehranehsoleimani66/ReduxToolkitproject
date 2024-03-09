import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {

    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const removeArticle = createAsyncThunk(
  "articles/removeArticle",
  async (id) => {

    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`,{method:"DELETE"})
      .then((res) => res.json())
      .then((data) => data);
  }
);


const slice = createSlice({
    name: "articles",
    initialState: [],
    reducers: {
     },
      extraReducers: (builder) => {
        builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
        console.log(action,"action")
         state.push(...action.payload)
        //   console.log(state, "state2");
        }),
        builder.addCase(removeArticle.fulfilled, (state, action) => {
         const newState = state.filter((article)=>article._id!==action.payload.id)
         return newState
          });
      }
    
  });

  export default slice.reducer;
  