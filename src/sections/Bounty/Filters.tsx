import { SlClose } from "react-icons/sl";

function Filters(): JSX.Element {
  return (
    <section>
      <h3 className="text-2xl text-white">Filters</h3>
      <div className="grid w-full grid-cols-4 gap-x-4">
        <>
          <select
            name="price_range"
            className="rounded-lg border-2 border-white bg-indigo-950 p-2 text-white"
            defaultValue="Price Range"
          >
            <option value="Price Range" disabled>
              Price Range
            </option>
            <option>1-10</option>
            <option>10-25</option>
            <option>25-100</option>
            <option>100+</option>
          </select>
          <select
            name="price_range"
            className="rounded-lg border-2 border-white bg-indigo-950 p-2 text-white"
            defaultValue="Type of work"
          >
            <option value="Type of work" disabled>
              Price Range
            </option>
            <option>Coding</option>
            <option>Testing</option>
            <option>Writing</option>
          </select>
          <select
            name="price_range"
            className="rounded-lg border-2 border-white bg-indigo-950 p-2 text-white"
            defaultValue="Price high to low"
          >
            <option value="Price high to low">Price high to low</option>
            <option>Price low to high</option>
            <option>Most recent</option>
            <option>Least recent</option>
          </select>
        </>

        <button className="ml-auto inline-flex items-center space-x-2 rounded-xl bg-white p-2 text-left active:scale-95">
          <p>Clear All</p>
          <SlClose />
        </button>
      </div>
    </section>
  );
}
export default Filters;
