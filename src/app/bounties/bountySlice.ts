import { createSlice } from "@reduxjs/toolkit";
import { addBountyToList } from "./bountyReducers";
import { Bounty } from "../../sections/Bounties";

const bountySlice = createSlice({
  name: "bounties",
  initialState: [],
  reducers: {
    addBounty(state: Bounty[], action) {
      addBountyToList(state, action);
    },
  },
});

export const { addBounty } = bountySlice.actions;

export default bountySlice.reducer;
