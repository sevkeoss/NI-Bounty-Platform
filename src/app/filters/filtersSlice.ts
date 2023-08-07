import { createSlice } from "@reduxjs/toolkit";
import { Bounty } from "../../sections/Bounty/Bounties";
import { applyFilters } from "./filtersSelector";

const bountySlice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    updateFilters(state: Bounty[], action) {
      applyFilters(state, action);
    },
  },
});

export const { updateFilters } = bountySlice.actions;

export default bountySlice.reducer;
