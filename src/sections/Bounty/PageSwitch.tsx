import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PageSwitch(): JSX.Element {
  return (
    <>
      <button className="rounded-xl p-2 text-black hover:bg-ni active:scale-95">
        First
      </button>
      <button className="inline-flex items-center rounded-xl p-2 text-black  hover:bg-ni active:scale-95">
        <IoIosArrowBack />
        Previous
      </button>
      <div className="inline-flex items-center space-x-2">
        <p className="text-black">Show</p>
        <select className="rounded-lg border-2 border-white bg-ni p-1">
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        <p className="text-black">Results</p>
      </div>
      <button className="inline-flex items-center rounded-xl p-2 text-black hover:bg-ni active:scale-95">
        Next
        <IoIosArrowForward />
      </button>
      <button className="rounded-xl p-2 text-black hover:bg-ni active:scale-95">
        Last
      </button>
    </>
  );
}

export default PageSwitch;
