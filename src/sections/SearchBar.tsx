import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar(): JSX.Element {
  return (
    <header className="inline-flex items-center py-4">
      <div className="flex items-center space-x-2 rounded-xl bg-indigo-800 p-2">
        <FaMagnifyingGlass className="text-slate-100" />
        <input
          type="text"
          placeholder="Search Bounties"
          className="bg-inherit text-slate-100 outline-none"
        />
      </div>
    </header>
  );
}

export default SearchBar;
