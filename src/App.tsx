import Header from "./components/header";
import Hero from "./components/hero";
import WorksList from "./components/works-list";

function App() {
  return (
    <div className="max-w-[1024px] min-[1025px]:mx-auto mx-[2rem] h-[90vh]">
      <Header />
      <div className="flex flex-col md:flex-row md:gap-[3rem] h-full md:items-center justify-evenly">
        <Hero />
        <WorksList />
      </div>
    </div>
  );
}

export default App;
