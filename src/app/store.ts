import { configureStore } from "@reduxjs/toolkit";
import { bountiesApiSlice } from "../services/bountiesQuery";

export const store = configureStore({
  reducer: {
    [bountiesApiSlice.reducerPath]: bountiesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(bountiesApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
