import Hero from "./components/Hero";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="min-h-screen bg-[#f4f2f2] flex w-screen sm:h-screen sm:overflow-x-hidden">
      <SideNav />
      <Hero />
    </div>
  );
}

export default App;
