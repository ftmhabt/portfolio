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

  const height = document.documentElement.clientHeight;
  const top = Math.round(height < 700 ? height / 1.3 : height / 1.2);

  document.documentElement.style.setProperty("--dynamic-top", `${top}px`);

  const work = works.find((item) => item.id === workId);
  return (
    work && (
      <div
        className={`work absolute w-screen bg-[#1d1d1d] text-[#f3f2ee] p-[2rem] left-0 flex flex-col sm:flex-row gap-[1rem] ${
          isAnimating && "animate-top"
        }`}
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">{work.name}</h1>
          <div className="flex gap-3">
            <a href={work.liveUrl}>live demo</a>
            <a href={work.repoUrl}>repo</a>
          </div>
          <div>{work.description}</div>
          <div className="text-2xl">technologies, tools, libraries</div>
          <ul>
            {work.tools.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <img className="sm:w-5/12" src={work.imageUrl} alt={work.name} />
      </div>
    )
  );
}
