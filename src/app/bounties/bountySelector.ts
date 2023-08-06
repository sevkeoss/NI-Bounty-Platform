import { Bounty } from "../../sections/Bounties";

export function getBounties(state: any): Bounty[] {
  return state.bounties;
}
