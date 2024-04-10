import Hero from "./_components/hero";
import WorksList from "./_components/works-list";

export default function Home() {
  return <div className="flex flex-col sm:flex-row sm:gap-[3rem] h-full sm:items-center justify-evenly">
    <Hero/>
    <WorksList/>
  </div>;
}
