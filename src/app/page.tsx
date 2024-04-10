import Hero from "./_components/hero";
import WorksList from "./_components/works-list";

export default function Home() {
  return <div className="flex flex-col md:flex-row md:gap-[3rem] h-full md:items-center justify-evenly">
    <Hero/>
    <WorksList/>
  </div>;
}
