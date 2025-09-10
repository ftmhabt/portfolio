import { mdiOpenInNew, mdiStarFourPointsSmall } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect } from "react";
import works from "./works-data";

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

  const work = works.find((item) => item.id === workId);

  return (
    work && (
      <div
        key={work.id}
        className={`absolute z-10 transform transition ${
          isAnimating && "-translate-y-24"
        }  duration-300 w-screen bg-[#1d1d1d] text-[#f3f2ee] p-[2rem] top-full left-0 flex flex-col gap-[1rem]`}
      >
        <div className="text-3xl flex justify-between">
          <div>{work.name}</div>
          <button
            className="sm:hidden block"
            onClick={() => {
              setIsAnimating(false);
            }}
          >
            x
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-[1rem]">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 even:*:mr-3">
              <a href={work.liveUrl} target="_blank">
                live demo
              </a>
              <Icon
                path={mdiOpenInNew}
                color="#f3f2ee"
                size={0.75}
                className="self-center"
              />
              <a href={work.repoUrl} target="_blank">
                repo
              </a>
              <Icon
                path={mdiOpenInNew}
                color="#f3f2ee"
                size={0.75}
                className="self-center"
              />
            </div>
            <div>{work.description}</div>
            <div className="text-2xl">technologies, tools, libraries</div>
            <ul>
              {work.tools.map((item) => (
                <li key={item} className="flex gap-2 pb-1">
                  <Icon
                    path={mdiStarFourPointsSmall}
                    color="#f3f2ee"
                    size={1}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {work.imageUrls && (
            <div className="flex flex-col gap-2">
              {work.imageUrls.map((url, index) => (
                <img
                  key={index}
                  className="sm:w-5/12"
                  src={url}
                  alt={work.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  );
}
