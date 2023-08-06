import { configureStore } from "@reduxjs/toolkit";
import bountyReducer from "./bounties/bountySlice";

export default configureStore({
  reducer: {
    bounties: bountyReducer,
  },
});
