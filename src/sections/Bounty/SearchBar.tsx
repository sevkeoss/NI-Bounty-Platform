import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar(): JSX.Element {
  return (
    <header className="inline-flex items-center py-4">
      <div className="flex items-center space-x-2 rounded-xl bg-gray-300 p-2">
        <FaMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Bounties"
          className="bg-inherit outline-none"
        />
      </div>
    </header>
  );
}

export default SearchBar;
