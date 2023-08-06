import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBounty } from "../app/bounties/bountySlice";

function BountiesBanner(): JSX.Element {
  const [isListBountyOpen, setIsListBountyOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const toggleModal = () => setIsListBountyOpen(!isListBountyOpen);
  const dispatch = useDispatch();
  const dispatchBounty = () => {
    dispatch(addBounty({ description, price }));
    toggleModal();
  };

  return (
    <>
      <section className="space-y-4 rounded-lg bg-gradient-to-r from-black via-blue-600 to-indigo-900 p-8">
        <h1 className="mb-8 text-4xl text-white">Bounties</h1>
        <p className="text-white">
          Find bounties to solve and earn TAO, or list a bounty and get your
          work solved quickly and easily!
        </p>
        <button
          className="rounded-xl bg-purple-700 p-3 active:scale-95"
          onClick={toggleModal}
        >
          List bounty
        </button>
      </section>
      <div className="flex justify-center"></div>

      {isListBountyOpen && (
        <div className="fixed left-0 top-0 h-full w-full bg-transparent"></div>
      )}
      {isListBountyOpen && (
        <div className="absolute left-1/2 z-10 flex h-96 w-72 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-4 rounded-lg bg-black shadow-lg">
          <h3 className="text-2xl text-white">Create Bounty</h3>
          <div className="flex flex-col items-center gap-y-6">
            <div className="relative">
              <input
                type="text"
                className="peer h-8 border-b-[1px] border-b-white bg-transparent text-white placeholder-transparent outline-none focus:border-b-purple-300"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label className="pointer-events-none absolute -top-4 left-0 text-sm text-white transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">
                Description
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                className="peer h-8 border-b-[1px] border-b-white bg-transparent text-white placeholder-transparent outline-none focus:border-b-purple-300"
                placeholder="Description"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <label className="pointer-events-none absolute -top-4 left-0 text-sm text-white transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">
                Amount
              </label>
            </div>
          </div>

          <div className="mt-4 flex gap-x-2">
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              className="rounded bg-green-400 px-4 py-2 font-bold text-white hover:bg-green-700"
              onClick={dispatchBounty}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BountiesBanner;
