import Header from "./components/header";
import Hero from "./components/hero";
import WorksList from "./components/works-list";
import { useState } from "react";
import Work from "./components/work";

function App() {
  const [work,setWork]:[work:string,setWork:(arg: string) => void]=useState('');
  return (
    <div className="max-w-[1024px] min-[1025px]:mx-auto mx-[2rem] h-[90vh]">
      <Header />
      <div className="flex flex-col md:flex-row md:gap-[3rem] h-full md:items-center justify-evenly">
        <Hero />
        <WorksList setWork={setWork} />
      </div>
      <Work name={work}/>
    </div>
  );
}

export default App;
