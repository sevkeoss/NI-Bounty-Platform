import Filters from "../sections/Filters";
import Bounties from "../sections/Bounties";
import SearchBar from "../sections/SearchBar";
import BountiesBanner from "../sections/BountiesBanner";
import PageSwitch from "../sections/PageSwitch";

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
