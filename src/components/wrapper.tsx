import React, { useEffect, useRef } from "react";
export default function Wrapper({
  isShowingWrapper,
  setIsShowingWrapper,
  wrapperContent,
  children,
}: {
  isShowingWrapper: boolean;
  setIsShowingWrapper: (arg: boolean) => void;
  wrapperContent: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsShowingWrapper(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`fixed h-screen w-screen bg-[#f3f2ee] p-[3rem] z-30
    -right-full transform duration-1000 transition ${
      isShowingWrapper &&
      `${wrapperContent === "about"?'sm:-translate-x-1/2':'sm:-translate-x-1/3'} -translate-x-full shadow-[0px_0px_0px_1000px_#00000024]`
    }
    grid grid-cols-2 auto-rows-min justify-between gap-y-5 items-center`}
    >
      <div className="text-2xl">{wrapperContent === "contact" ? "contact me" : "about me"}</div>
      <button
        className="sm:hidden block justify-self-end rounded-full border border-[#1d1d1d] px-5 leading-7 hover:text-[#f3f2ee] hover:bg-[#1d1d1d]"
        onClick={() => setIsShowingWrapper(false)}
      >
        close
      </button>
      <div className="col-span-full">{children}</div>
    </div>
  );
}
