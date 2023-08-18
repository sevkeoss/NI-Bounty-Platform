import { BsArrowRight } from "react-icons/bs";

import { Bounty } from "../../services/bountiesQuery";
import { useGetBountiesQuery } from "../../services/bountiesQuery";

function BountyContent({ bounty }: { bounty: Bounty }): JSX.Element {
  return (
    <div className="flex scale-95 flex-col gap-y-4 rounded-xl bg-gray-300 p-4 text-black hover:scale-100">
      <header className="flex flex-row items-center">
        <p>{bounty.price} TAO</p>
        <BsArrowRight className="ml-auto text-2xl text-black" />
      </header>
      <p>{bounty.description}</p>
      <div>{bounty.lister}</div>
      <div>{bounty.createdAt}</div>
      <button className="w-full rounded-lg bg-ni p-1 active:scale-95">
        Apply
      </button>
    </div>
  );
}

function Bounties(): JSX.Element {
  const { data: bounties } = useGetBountiesQuery();
  if (!bounties) return <></>;

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {bounties.map((bounty) => (
        <BountyContent key={bounty.id} bounty={bounty} />
      ))}
    </section>
  );
}

export default Bounties;
