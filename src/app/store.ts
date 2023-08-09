import { configureStore } from "@reduxjs/toolkit";
import bountiesReducer from "./bounties/bountySlice";
import { bountiesApiSlice } from "../services/bountiesQuery";

export const store = configureStore({
  reducer: {
    bounties: bountiesReducer,
    [bountiesApiSlice.reducerPath]: bountiesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(bountiesApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
