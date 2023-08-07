import { Bounty } from "../../sections/Bounty/Bounties";

export function addBountyToList(
  state: Bounty[],
  action: { type: string; payload: any },
) {
  const { description, price } = action.payload;
  const newBounty = {
    price,
    description,
    lister: "Foo",
    createdAt: new Date(),
  };
  state.push(newBounty);
}
