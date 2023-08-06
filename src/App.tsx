import BountiesPage from "./pages/BountiesPage";
import SideBar from "./sections/SideBar";

function App(): JSX.Element {
  return (
    <div className="flex min-h-screen bg-indigo-950 ">
      <SideBar />
      <BountiesPage />
    </div>
  );
}

export default App;
