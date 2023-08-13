import { SiGithub, SiDiscord, SiTwitter } from "react-icons/si";

function SideBarButton({ text }: { text: string }): JSX.Element {
  return (
    <li>
      <button className="rounded-xl p-2 font-semibold text-ni duration-300 hover:bg-slate-300 focus:outline focus:outline-2 focus:outline-white">
        {text}
      </button>
    </li>
  );
}

function SideBar(): JSX.Element {
  const navs: string[] = ["Bounties", "Services"];

  return (
    <section className="fixed left-0 top-0 flex h-full w-40 shrink flex-col items-center bg-gray-300">
      <div className="mt-4 flex flex-col items-center">
        <img
          src="/ni-logo.webp"
          alt="Neural Internet Logo"
          className="rounded-full"
          width="100"
          height="200"
        />
        <ul className="mt-8 space-y-2 text-center">
          {navs.map((nav: string, i: number) => (
            <SideBarButton key={i} text={nav} />
          ))}
        </ul>
      </div>
      <div className="mb-4 mt-auto flex flex-col items-center gap-y-4">
        <SiGithub className="rounded-full text-3xl text-ni" />
        <SiDiscord className="rounded-full text-3xl text-ni" />
        <SiTwitter className="rounded-full text-3xl text-ni" />
        <button className="text-ni">Documentation</button>
      </div>
    </section>
  );
}

export default SideBar;
