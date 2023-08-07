import { Bounty } from "../../sections/Bounty/Bounties";

export function applyFilters(state: { bounties: Bounty[] }): Bounty[] {
  return state.bounties;
}
