import { useEffect,useRef } from "react";
export default function Contact({isShowingContact,setIsShowingContact}:{isShowingContact:boolean;setIsShowingContact:(arg:boolean)=>void;}) {
  
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShowingContact(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  
  return (
    <div ref={ref} className={`fixed h-screen w-screen bg-[#f3f2ee] sm:border sm:border-l-2
    -right-full transform duration-300 transition ${isShowingContact&&'sm:-translate-x-1/3 -translate-x-full'}
    p-[3rem]`}>
      <div>contact</div>
      <button className="sm:hidden block" onClick={()=>setIsShowingContact(false)}>x</button>
    </div>
  )
}
