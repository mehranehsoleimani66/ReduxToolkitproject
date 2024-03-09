import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/users";
import courseReducer from "./store/courses";
import articlesReducer from "./store/articles";
export default configureStore({
  reducer: {
    users: userReducer,
    courses:courseReducer,articles:articlesReducer
  }
});
