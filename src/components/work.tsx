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
  }, [workId]);

  const height=document.documentElement.clientHeight;
  const top = Math.round(height<700?height/1.3:height/1.2);

  document.documentElement.style.setProperty("--dynamic-top", `${top}px`);

  const work = works.find((item) => item.id === workId);
  return (
    work && (
      <div
        className={`work absolute w-screen left-0 ${
          isAnimating && "animate-top"
        }`}
      >
        <div>{work.name}</div>
        <div>{work.description}</div>
        <img src={work.imageUrl} alt={work.name} />
      </div>
    )
  );
}
