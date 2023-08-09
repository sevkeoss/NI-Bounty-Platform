import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Bounty } from "./types";
import { bountiesApiSlice } from "../../services/bountiesQuery";

export interface BountiesState {
  bountiesList: Bounty[];
}

const initialState: BountiesState = {
  bountiesList: [],
};

const bountySlice = createSlice({
  name: "bounties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      bountiesApiSlice.endpoints.getBounties.matchFulfilled,
      (state, action) => {
        state.bountiesList = action.payload;
      },
    );
    builder.addMatcher(
      bountiesApiSlice.endpoints.createBounty.matchFulfilled,
      (state, action) => {
        state.bountiesList.push(action.payload);
      },
    );
  },
});

export default bountySlice.reducer;
