import Filters from "../sections/Bounty/Filters";
import Bounties from "../sections/Bounty/Bounties";
import SearchBar from "../sections/Bounty/SearchBar";
import BountiesBanner from "../sections/Bounty/BountiesBanner";
import PageSwitch from "../sections/Bounty/PageSwitch";

function BountiesPage(): JSX.Element {
  return (
    <main className="ml-40 flex w-screen flex-col items-center">
      <div className="relative w-3/4 space-y-4">
        <SearchBar />
        <BountiesBanner />
        <Filters />
        <Bounties />

        <footer className="relative bottom-0 flex items-center justify-between text-white">
          <PageSwitch />
        </footer>
      </div>
    </main>
  );
}

export default BountiesPage;
