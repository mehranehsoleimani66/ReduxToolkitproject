import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/users";

export default configureStore({
  reducer: {
    users: userReducer
  }
});
