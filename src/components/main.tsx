import Hero from "./hero";
import WorksList from "./works-list";

export default function Main({
  setWorkId,
  setIsAnimating
}: {
  setWorkId: (arg: number | null) => void;
  setIsAnimating: (arg: boolean) => void;
}) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
                flex flex-col md:flex-row md:gap-[3rem] md:items-center justify-evenly md:justify-between 
                h-screen w-[90vw] mt-5">
      <Hero />
      <WorksList setWorkId={setWorkId} setIsAnimating={setIsAnimating}/>
    </div>
  );
}
