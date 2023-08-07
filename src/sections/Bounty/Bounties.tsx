import { BsArrowRight } from "react-icons/bs";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { getBounties } from "../../app/bounties/bountySelector";

export interface Bounty {
  price: number;
  description: string;
  lister: string;
  createdAt: Date;
}

function BountyContent({ bounty }: { bounty: Bounty }): JSX.Element {
  return (
    <div className="flex flex-col gap-y-4 rounded-xl bg-indigo-800 p-4 text-white">
      <header className="flex flex-row items-center">
        <p>{bounty.price} TAO</p>
        <BsArrowRight className="ml-auto text-2xl text-white" />
      </header>
      <p>{bounty.description}</p>
      <div>{bounty.lister}</div>
      <div>{bounty.createdAt.toLocaleDateString()}</div>
      <button className="w-full rounded-lg bg-indigo-950 p-1 active:scale-95">
        Apply
      </button>
    </div>
  );
}

function Bounties({ bounties }: { bounties: Bounty[] }): JSX.Element {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {bounties.map((bounty, i) => (
        <BountyContent key={i} bounty={bounty} />
      ))}
    </section>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    bounties: getBounties(state),
  };
};

export default connect(mapStateToProps, null)(Bounties);
