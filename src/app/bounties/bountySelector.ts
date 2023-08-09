import { Bounty } from "./types";
import { BountiesState } from "./bountySlice";

export function getBounties(state: { bounties: BountiesState }): Bounty[] {
  return state.bounties.bountiesList;
}
