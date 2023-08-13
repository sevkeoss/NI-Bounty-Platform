import BountiesPage from "./pages/BountiesPage";
import SideBar from "./sections/Bounty/SideBar";

function App(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <BountiesPage />
    </div>
  );
}

export default App;
