import works from "./works-data";
import { useEffect } from "react";

export default function Work({
  workId,
  isAnimating,
  setIsAnimating,
}: {
  workId: number | null;
  isAnimating: boolean;
  setIsAnimating: (arg: boolean) => void;
}) {
  useEffect(() => {
    setIsAnimating(true);
  }, [isAnimating]);

  const height=document.documentElement.clientHeight;
  const top = Math.round(height<700?height/1.3:height/1.2);

  document.documentElement.style.setProperty("--dynamic-top", `${top}px`);

  const work = works.find((item) => item.id === workId);
  return (
    work && (
      <div
        className={`work absolute w-screen bg-black text-white p-[2rem] left-0 flex flex-col sm:flex-row gap-[1rem] ${
          isAnimating && "animate-top"
        }`}
      >
        <div>
        <div className="mb-[1rem]">{work.name}</div>
        <div>{work.description}</div>

        </div>
        <img className="sm:w-5/12" src={work.imageUrl} alt={work.name} />
      </div>
    )
  );
}
