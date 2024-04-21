import React, { useEffect, useRef } from "react";
export default function Wrapper({
  isShowingWrapper,
  setIsShowingWrapper,
  children,
}: {
  isShowingWrapper: boolean;
  setIsShowingWrapper: (arg: boolean) => void;
  children:React.ReactNode;
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
      className={`fixed h-screen w-screen bg-[#f3f2ee] sm:border sm:border-l-2
    -right-full transform duration-300 transition ${
      isShowingWrapper && "sm:-translate-x-1/3 -translate-x-full shadow-[0px_0px_0px_1000px_#00000024]"
    }
    p-[3rem] z-20`}
    >
      <div>
        {children}
      </div>
      <button
        className="sm:hidden block"
        onClick={() => setIsShowingWrapper(false)}
      >
        x
      </button>
    </div>
  );
}
