import { configureStore } from "@reduxjs/toolkit";
import bountyReducer from "./bounties/bountySlice";

export const store = configureStore({
  reducer: {
    bounties: bountyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
