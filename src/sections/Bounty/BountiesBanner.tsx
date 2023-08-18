import { useState } from "react";
import { useCreateBountyMutation } from "../../services/bountiesQuery";
import { CreateBounty } from "../../services/bountiesQuery";

function BountiesBanner(): JSX.Element {
  const [isListBountyOpen, setIsListBountyOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const toggleModal = () => setIsListBountyOpen(!isListBountyOpen);

  const [postBounty] = useCreateBountyMutation();
  const createBounty = async () => {
    try {
      const newBounty: Required<CreateBounty> = {
        description,
        price,
      };
      await postBounty(newBounty).unwrap();
      setDescription("");
      setPrice(0);
    } catch (err) {
      console.log(err);
    }

    toggleModal();
  };

  return (
    <>
      <section className="space-y-4 rounded-lg bg-gray-300 p-8">
        <h1 className="mb-8 text-4xl font-semibold">Bounties</h1>
        <p>
          Find bounties to solve and earn TAO, or list a bounty and get your
          work solved quickly and easily!
        </p>
        <button
          className="rounded-xl bg-ni p-3 text-white active:scale-95"
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
        <div className="absolute left-1/2 z-10 flex h-96 w-72 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-4 rounded-lg bg-slate-300 shadow-xl">
          <p className="absolute right-5 top-5 ">&times;</p>
          <h3 className="text-2xl text-black">Create Bounty</h3>
          <div className="flex flex-col items-center gap-y-6">
            <div className="relative">
              <input
                type="text"
                className="peer h-8 border-b-[1px] border-b-white bg-transparent text-black placeholder-transparent outline-none focus:border-b-ni"
                placeholder="Description"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <label className="pointer-events-none absolute -top-4 left-0 text-sm text-black transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black">
                Description
              </label>
            </div>
            <div className="relative">
              <input
                type="number"
                className="peer h-8 border-b-[1px] border-b-white bg-transparent text-black placeholder-transparent outline-none focus:border-b-ni"
                placeholder="Description"
                required
                min="1"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <label className="pointer-events-none absolute -top-4 left-0 text-sm text-black transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black">
                Amount
              </label>
            </div>
          </div>

          <div className="mt-4 flex gap-x-2">
            <button
              className="rounded bg-ni px-4 py-2 font-bold text-white hover:bg-purple-800"
              onClick={createBounty}
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
