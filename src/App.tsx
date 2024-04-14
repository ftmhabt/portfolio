import Header from "./components/header";
import Hero from "./components/hero";
import WorksList from "./components/works-list";
import { useState } from "react";
import Work from "./components/work";

function App() {
  const [work, setWork]: [work: string, setWork: (arg: string) => void] =
    useState("");
    const [effect, setEffect] = useState(false);
  return (
    <div >
      <Header />
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col md:flex-row md:gap-[3rem] md:items-center justify-evenly md:justify-between h-screen w-[90vw] mt-5">
        <Hero />
        <WorksList setWork={setWork} setEffect={setEffect} />
      </div>
      <Work name={work} effect={effect}/>
    </div>
  );
}

export default App;
