import { SiGithub, SiDiscord, SiTwitter } from "react-icons/si";

function SideBar(): JSX.Element {
  return (
    <section className="fixed left-0 top-0 flex h-full w-40 shrink flex-col items-center bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-950">
      <div className="mt-4 flex flex-col items-center">
        <img
          src="/ni-logo.webp"
          alt="Neural Internet Logo"
          className="rounded-full"
          width="100"
          height="200"
        />
        <ul className="mt-8 space-y-2 text-center">
          <li>
            <button className="rounded-xl p-2 text-white focus:outline focus:outline-2 focus:outline-white">
              Bounties
            </button>
          </li>
          <li>
            <button className="rounded-xl p-2 text-white focus:outline focus:outline-2 focus:outline-white">
              Services
            </button>
          </li>
        </ul>
      </div>
      <div className="mb-4 mt-auto flex flex-col items-center gap-y-4">
        <SiGithub className="rounded-full text-3xl text-white" />
        <SiDiscord className="rounded-full text-3xl text-white" />
        <SiTwitter className="rounded-full text-3xl text-white" />
        <button className="text-white">Documentation</button>
      </div>
    </section>
  );
}

export default SideBar;
